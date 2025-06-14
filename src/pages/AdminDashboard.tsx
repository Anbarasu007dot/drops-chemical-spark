import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  BarChart3, 
  FileText, 
  Users, 
  ShoppingCart, 
  Plus, 
  Edit, 
  Trash2, 
  LogOut,
  Eye,
  Save,
  X,
  Calendar,
  Tag,
  Image,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { CreateBlogPost, UpdateBlogPost } from "@/lib/supabase";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const { posts, loading, createPost, updatePost, deletePost } = useBlogPosts();
  
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [editingPost, setEditingPost] = useState<string | null>(null);
  const [formData, setFormData] = useState<CreateBlogPost & { id?: string }>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featured_image: "",
    meta_title: "",
    meta_description: "",
    tags: [],
    category: "general",
    status: "draft"
  });

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated");
    if (!isAuthenticated) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    toast.success("Logged out successfully");
    navigate("/admin");
  };

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      featured_image: "",
      meta_title: "",
      meta_description: "",
      tags: [],
      category: "general",
      status: "draft"
    });
    setEditingPost(null);
    setShowNewPostForm(false);
  };

  const handleEdit = (post: any) => {
    setFormData({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || "",
      content: post.content || "",
      featured_image: post.featured_image || "",
      meta_title: post.meta_title || "",
      meta_description: post.meta_description || "",
      tags: post.tags || [],
      category: post.category || "general",
      status: post.status
    });
    setEditingPost(post.id);
    setShowNewPostForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.excerpt) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Generate slug from title if not provided
    if (!formData.slug) {
      formData.slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }

    try {
      if (editingPost) {
        const { id, ...updateData } = formData;
        await updatePost(editingPost, updateData as UpdateBlogPost);
      } else {
        await createPost(formData as CreateBlogPost);
      }
      resetForm();
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deletePost(id);
    }
  };

  const handleTagsChange = (value: string) => {
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData({ ...formData, tags });
  };

  const stats = [
    { 
      title: "Total Blog Posts", 
      value: posts.length, 
      icon: <FileText className="w-6 h-6" />,
      color: "text-blue-600"
    },
    { 
      title: "Published Posts", 
      value: posts.filter(p => p.status === "published").length, 
      icon: <Eye className="w-6 h-6" />,
      color: "text-green-600"
    },
    { 
      title: "Draft Posts", 
      value: posts.filter(p => p.status === "draft").length, 
      icon: <Edit className="w-6 h-6" />,
      color: "text-orange-600"
    },
    { 
      title: "Total Views", 
      value: posts.reduce((sum, post) => sum + (post.view_count || 0), 0), 
      icon: <BarChart3 className="w-6 h-6" />,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold">
              D
            </div>
            <h1 className="text-2xl font-bold">Drops Chemicals Admin</h1>
          </div>
          
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm h-screen sticky top-0">
          <nav className="p-4 space-y-2">
            {[
              { id: "overview", label: "Overview", icon: <BarChart3 className="w-5 h-5" /> },
              { id: "blog", label: "Blog Posts", icon: <FileText className="w-5 h-5" /> },
              { id: "inquiries", label: "Inquiries", icon: <Users className="w-5 h-5" /> },
              { id: "products", label: "Products", icon: <ShoppingCart className="w-5 h-5" /> }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Dashboard Overview</h2>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">{stat.title}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                        <div className={stat.color}>
                          {stat.icon}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Blog Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {posts.slice(0, 5).map((post) => (
                      <div key={post.id} className="flex items-center justify-between py-2 border-b">
                        <div>
                          <span className="font-medium">{post.title}</span>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant={post.status === "published" ? "default" : "secondary"}>
                              {post.status}
                            </Badge>
                            <span className="text-sm text-gray-500">
                              {new Date(post.created_at).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{post.view_count} views</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "blog" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Blog Management</h2>
                <Button onClick={() => setShowNewPostForm(true)} className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Post
                </Button>
              </div>

              {/* Blog Post Form */}
              {showNewPostForm && (
                <Card className="border-2 border-blue-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>
                        {editingPost ? "Edit Blog Post" : "Create New Blog Post"}
                      </CardTitle>
                      <Button variant="ghost" size="sm" onClick={resetForm}>
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Basic Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <FileText className="w-4 h-4 inline mr-1" />
                            Title *
                          </label>
                          <Input
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            placeholder="Enter blog post title"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Globe className="w-4 h-4 inline mr-1" />
                            Slug
                          </label>
                          <Input
                            value={formData.slug}
                            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                            placeholder="url-friendly-slug (auto-generated if empty)"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <FileText className="w-4 h-4 inline mr-1" />
                          Excerpt *
                        </label>
                        <Textarea
                          value={formData.excerpt}
                          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                          placeholder="Brief description of the blog post"
                          rows={3}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <Edit className="w-4 h-4 inline mr-1" />
                          Content
                        </label>
                        <Textarea
                          value={formData.content}
                          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                          placeholder="Full blog post content (Markdown supported)"
                          rows={8}
                        />
                      </div>

                      {/* SEO & Meta */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Image className="w-4 h-4 inline mr-1" />
                            Featured Image URL
                          </label>
                          <Input
                            value={formData.featured_image}
                            onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                            placeholder="https://example.com/image.jpg"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Tag className="w-4 h-4 inline mr-1" />
                            Category
                          </label>
                          <Input
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            placeholder="Category"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <Tag className="w-4 h-4 inline mr-1" />
                          Tags (comma-separated)
                        </label>
                        <Input
                          value={formData.tags.join(', ')}
                          onChange={(e) => handleTagsChange(e.target.value)}
                          placeholder="water treatment, chemicals, industry"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Meta Title</label>
                          <Input
                            value={formData.meta_title}
                            onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                            placeholder="SEO title (60 chars max)"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">Status</label>
                          <select
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' })}
                            className="w-full rounded-md border border-gray-300 px-3 py-2"
                          >
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Meta Description</label>
                        <Textarea
                          value={formData.meta_description}
                          onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                          placeholder="SEO description (160 chars max)"
                          rows={2}
                        />
                      </div>

                      <div className="flex space-x-3 pt-4">
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                          <Save className="w-4 h-4 mr-2" />
                          {editingPost ? "Update Post" : "Create Post"}
                        </Button>
                        <Button type="button" variant="outline" onClick={resetForm}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}

              {/* Blog Posts List */}
              <div className="space-y-4">
                {loading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-2 text-gray-600">Loading posts...</p>
                  </div>
                ) : posts.length === 0 ? (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No blog posts yet. Create your first post!</p>
                    </CardContent>
                  </Card>
                ) : (
                  posts.map((post) => (
                    <Card key={post.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-bold">{post.title}</h3>
                              <Badge variant={post.status === "published" ? "default" : "secondary"}>
                                {post.status}
                              </Badge>
                              {post.tags.length > 0 && (
                                <div className="flex gap-1">
                                  {post.tags.slice(0, 2).map((tag, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                            <p className="text-gray-600 mb-2 line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.created_at).toLocaleDateString()}
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                {post.view_count} views
                              </span>
                              {post.category && (
                                <span className="flex items-center gap-1">
                                  <Tag className="w-4 h-4" />
                                  {post.category}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex space-x-2 ml-4">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleEdit(post)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => handleDelete(post.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>
          )}

          {activeTab === "inquiries" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Customer Inquiries</h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600">No recent inquiries to display.</p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "products" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Product Management</h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600">Product management features coming soon.</p>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;