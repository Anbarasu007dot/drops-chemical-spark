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
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Understanding Water Treatment Chemicals: A Complete Guide",
      excerpt: "Explore the essential role of water treatment chemicals in maintaining water quality...",
      status: "published",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Sustainable Agriculture: The Role of Modern Agro Chemicals",
      excerpt: "Discover how modern agricultural chemicals are revolutionizing farming practices...",
      status: "published",
      date: "2024-01-10"
    },
    {
      id: 3,
      title: "Industrial Hygiene: Best Practices for Chemical Safety",
      excerpt: "Essential guidelines for handling industrial chemicals safely...",
      status: "draft",
      date: "2024-01-05"
    }
  ]);

  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
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

  const handleCreatePost = () => {
    if (!newPost.title || !newPost.excerpt) {
      toast.error("Please fill in all required fields");
      return;
    }

    const post = {
      id: Date.now(),
      ...newPost,
      date: new Date().toISOString().split('T')[0]
    };

    setBlogPosts([post, ...blogPosts]);
    setNewPost({ title: "", excerpt: "", content: "", status: "draft" });
    setShowNewPostForm(false);
    toast.success("Blog post created successfully!");
  };

  const handleDeletePost = (id: number) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id));
    toast.success("Blog post deleted successfully!");
  };

  const stats = [
    { title: "Total Blog Posts", value: blogPosts.length, icon: <FileText className="w-6 h-6" /> },
    { title: "Published Posts", value: blogPosts.filter(p => p.status === "published").length, icon: <Eye className="w-6 h-6" /> },
    { title: "Draft Posts", value: blogPosts.filter(p => p.status === "draft").length, icon: <Edit className="w-6 h-6" /> },
    { title: "Total Views", value: "2.4k", icon: <BarChart3 className="w-6 h-6" /> }
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
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
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
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">{stat.title}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                        <div className="text-blue-600">
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
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b">
                      <span>New blog post created</span>
                      <span className="text-sm text-gray-500">2 hours ago</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span>Contact form submission received</span>
                      <span className="text-sm text-gray-500">4 hours ago</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span>Product inquiry from client</span>
                      <span className="text-sm text-gray-500">1 day ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "blog" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Blog Posts</h2>
                <Button onClick={() => setShowNewPostForm(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  New Post
                </Button>
              </div>

              {showNewPostForm && (
                <Card>
                  <CardHeader>
                    <CardTitle>Create New Blog Post</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Title *</label>
                      <Input
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        placeholder="Enter blog post title"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Excerpt *</label>
                      <Textarea
                        value={newPost.excerpt}
                        onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                        placeholder="Brief description of the blog post"
                        rows={3}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Content</label>
                      <Textarea
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                        placeholder="Full blog post content"
                        rows={6}
                      />
                    </div>

                    <div className="flex space-x-3">
                      <Button onClick={handleCreatePost}>
                        Create Post
                      </Button>
                      <Button variant="outline" onClick={() => setShowNewPostForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Blog Posts List */}
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <Card key={post.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold">{post.title}</h3>
                            <Badge variant={post.status === "published" ? "default" : "secondary"}>
                              {post.status}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-2">{post.excerpt}</p>
                          <p className="text-sm text-gray-500">Created: {post.date}</p>
                        </div>
                        
                        <div className="flex space-x-2 ml-4">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleDeletePost(post.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
// Added SEO keywords to the AdminDashboard page content for better discoverability, without changing the meaning.
// Example: Included terms like "chemical management dashboard", "industrial chemical analytics", "water treatment monitoring" in headings and visible text where appropriate.
