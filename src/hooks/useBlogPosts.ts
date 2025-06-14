import { useState, useEffect } from 'react'
import { supabase, BlogPost, CreateBlogPost, UpdateBlogPost } from '@/lib/supabase'
import { toast } from 'sonner'

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch all blog posts
  const fetchPosts = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setPosts(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch posts')
      toast.error('Failed to fetch blog posts')
    } finally {
      setLoading(false)
    }
  }

  // Create a new blog post
  const createPost = async (postData: CreateBlogPost): Promise<BlogPost | null> => {
    try {
      // Generate slug if not provided
      if (!postData.slug) {
        postData.slug = postData.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')
      }

      const { data, error } = await supabase
        .from('blog_posts')
        .insert([{
          ...postData,
          published_at: postData.status === 'published' ? new Date().toISOString() : null
        }])
        .select()
        .single()

      if (error) throw error
      
      setPosts(prev => [data, ...prev])
      toast.success('Blog post created successfully!')
      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create post'
      setError(errorMessage)
      toast.error(errorMessage)
      return null
    }
  }

  // Update a blog post
  const updatePost = async (id: string, updates: UpdateBlogPost): Promise<BlogPost | null> => {
    try {
      // Set published_at when changing status to published
      if (updates.status === 'published') {
        const currentPost = posts.find(p => p.id === id)
        if (currentPost && !currentPost.published_at) {
          updates.published_at = new Date().toISOString()
        }
      }

      const { data, error } = await supabase
        .from('blog_posts')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      setPosts(prev => prev.map(post => post.id === id ? data : post))
      toast.success('Blog post updated successfully!')
      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update post'
      setError(errorMessage)
      toast.error(errorMessage)
      return null
    }
  }

  // Delete a blog post
  const deletePost = async (id: string): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id)

      if (error) throw error

      setPosts(prev => prev.filter(post => post.id !== id))
      toast.success('Blog post deleted successfully!')
      return true
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete post'
      setError(errorMessage)
      toast.error(errorMessage)
      return false
    }
  }

  // Get published posts for public blog page
  const getPublishedPosts = async (): Promise<BlogPost[]> => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false })

      if (error) throw error
      return data || []
    } catch (err) {
      console.error('Failed to fetch published posts:', err)
      return []
    }
  }

  // Get post by slug for public viewing
  const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single()

      if (error) throw error

      // Increment view count
      await supabase
        .from('blog_posts')
        .update({ view_count: data.view_count + 1 })
        .eq('id', data.id)

      return data
    } catch (err) {
      console.error('Failed to fetch post by slug:', err)
      return null
    }
  }

  // Subscribe to real-time changes
  useEffect(() => {
    fetchPosts()

    // Set up real-time subscription
    const subscription = supabase
      .channel('blog_posts_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'blog_posts' },
        (payload) => {
          console.log('Real-time update:', payload)
          fetchPosts() // Refetch all posts on any change
        }
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return {
    posts,
    loading,
    error,
    createPost,
    updatePost,
    deletePost,
    getPublishedPosts,
    getPostBySlug,
    refetch: fetchPosts
  }
}