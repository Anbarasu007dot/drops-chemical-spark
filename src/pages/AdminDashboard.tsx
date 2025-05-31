
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  Package, 
  FileText, 
  TrendingUp, 
  Upload, 
  Download,
  Edit,
  Eye,
  Plus,
  Search,
  Filter,
  ChevronDown,
  CheckCircle,
  XCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [msdsLink, setMsdsLink] = useState("");

  // Sample data - in real app would come from API
  const [stats] = useState({
    totalUsers: 1250,
    totalProducts: 486,
    totalBlogs: 24,
    monthlyGrowth: 12.5
  });

  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Calcium Hypochlorite",
      category: "Water Treatment",
      status: "Active",
      hasMSDS: true,
      msdsLink: "https://drive.google.com/file/d/sample1",
      lastUpdated: "2024-01-15"
    },
    {
      id: "2", 
      name: "Sodium Hydroxide",
      category: "Basic Industrial",
      status: "Active",
      hasMSDS: false,
      msdsLink: "",
      lastUpdated: "2024-01-12"
    },
    {
      id: "3",
      name: "Potassium Nitrate",
      category: "Agro & Aquaculture",
      status: "Active", 
      hasMSDS: true,
      msdsLink: "https://drive.google.com/file/d/sample3",
      lastUpdated: "2024-01-10"
    },
    {
      id: "4",
      name: "Citric Acid Monohydrate",
      category: "Food Chemicals",
      status: "Active",
      hasMSDS: false,
      msdsLink: "",
      lastUpdated: "2024-01-08"
    },
    {
      id: "5",
      name: "Linear Alkyl Benzene Sulphonic Acid",
      category: "Hygiene Raw Materials", 
      status: "Active",
      hasMSDS: true,
      msdsLink: "https://drive.google.com/file/d/sample5",
      lastUpdated: "2024-01-05"
    }
  ]);

  const [blogs, setBlogs] = useState([
    {
      id: "1",
      title: "Latest Developments in Water Treatment Technology",
      author: "Technical Team",
      status: "Published",
      publishDate: "2024-01-15",
      views: 1250
    },
    {
      id: "2",
      title: "Sustainable Agriculture with Advanced Chemical Solutions", 
      author: "Research Team",
      status: "Draft",
      publishDate: "",
      views: 0
    },
    {
      id: "3", 
      title: "Industry 4.0 and Chemical Manufacturing",
      author: "Innovation Team",
      status: "Published", 
      publishDate: "2024-01-10",
      views: 980
    }
  ]);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated");
    if (!isAuthenticated) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    toast.success("Logged out successfully!");
    navigate("/admin");
  };

  const validateDriveLink = (link: string) => {
    const drivePattern = /^https:\/\/drive\.google\.com\/file\/d\/[a-zA-Z0-9_-]+/;
    return drivePattern.test(link);
  };

  const handleMSDSUpload = () => {
    if (!msdsLink.trim()) {
      toast.error("Please enter a Google Drive link");
      return;
    }

    if (!validateDriveLink(msdsLink)) {
      toast.error("Please enter a valid Google Drive link");
      return;
    }

    // Update product with MSDS
    setProducts(prev => prev.map(product => 
      product.id === selectedProduct?.id 
        ? { ...product, hasMSDS: true, msdsLink: msdsLink, lastUpdated: new Date().toISOString().split('T')[0] }
        : product
    ));

    toast.success("MSDS uploaded successfully!");
    setIsUploadModalOpen(false);
    setMsdsLink("");
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" || 
                         (selectedFilter === "has-msds" && product.hasMSDS) ||
                         (selectedFilter === "missing-msds" && !product.hasMSDS);
    return matchesSearch && matchesFilter;
  });

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="admin-card bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-100">Total Users</CardTitle>
            <Users className="h-4 w-4 text-blue-200" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-blue-200">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="admin-card bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-100">Total Products</CardTitle>
            <Package className="h-4 w-4 text-green-200" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProducts}</div>
            <p className="text-xs text-green-200">+8% from last month</p>
          </CardContent>
        </Card>

        <Card className="admin-card bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-100">Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-purple-200" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalBlogs}</div>
            <p className="text-xs text-purple-200">+3 this month</p>
          </CardContent>
        </Card>

        <Card className="admin-card bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-100">Growth Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-200" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.monthlyGrowth}%</div>
            <p className="text-xs text-orange-200">Monthly growth</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-80"
            />
          </div>
          
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Products</option>
            <option value="has-msds">Has MSDS</option>
            <option value="missing-msds">Missing MSDS</option>
          </select>
        </div>
        
        <Button className="accent-button">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      <Card className="admin-card">
        <CardHeader>
          <CardTitle>Products Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-2 font-semibold text-slate-700">Product Name</th>
                  <th className="text-left py-4 px-2 font-semibold text-slate-700">Category</th>
                  <th className="text-left py-4 px-2 font-semibold text-slate-700">MSDS Status</th>
                  <th className="text-left py-4 px-2 font-semibold text-slate-700">Last Updated</th>
                  <th className="text-left py-4 px-2 font-semibold text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200">
                    <td className="py-4 px-2">
                      <div className="font-medium text-slate-900">{product.name}</div>
                    </td>
                    <td className="py-4 px-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {product.category}
                      </Badge>
                    </td>
                    <td className="py-4 px-2">
                      {product.hasMSDS ? (
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-green-600 font-medium">Available</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <XCircle className="w-4 h-4 text-red-500" />
                          <span className="text-red-600 font-medium">Missing</span>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-2 text-slate-600">{product.lastUpdated}</td>
                    <td className="py-4 px-2">
                      <div className="flex items-center space-x-2">
                        {product.hasMSDS ? (
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-green-600 border-green-600 hover:bg-green-50"
                            onClick={() => window.open(product.msdsLink, '_blank')}
                          >
                            <Download className="w-3 h-3 mr-1" />
                            View MSDS
                          </Button>
                        ) : (
                          <Dialog open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen}>
                            <DialogTrigger asChild>
                              <Button
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700 text-white"
                                onClick={() => setSelectedProduct(product)}
                              >
                                <Upload className="w-3 h-3 mr-1" />
                                Upload MSDS
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                              <DialogHeader>
                                <DialogTitle>Upload MSDS Document</DialogTitle>
                                <DialogDescription>
                                  Upload MSDS for {selectedProduct?.name}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Google Drive Link
                                  </label>
                                  <Input
                                    placeholder="https://drive.google.com/file/d/..."
                                    value={msdsLink}
                                    onChange={(e) => setMsdsLink(e.target.value)}
                                    className="w-full"
                                  />
                                  <p className="text-xs text-slate-500 mt-1">
                                    Please ensure the link is publicly accessible
                                  </p>
                                </div>
                                <div className="flex justify-end space-x-3">
                                  <Button 
                                    variant="outline" 
                                    onClick={() => setIsUploadModalOpen(false)}
                                  >
                                    Cancel
                                  </Button>
                                  <Button 
                                    onClick={handleMSDSUpload}
                                    className="accent-button"
                                  >
                                    Upload MSDS
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}
                        <Button size="sm" variant="outline">
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderBlogs = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">Blog Management</h2>
        <Button className="accent-button">
          <Plus className="w-4 h-4 mr-2" />
          Create New Post
        </Button>
      </div>

      <Card className="admin-card">
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-2 font-semibold text-slate-700">Title</th>
                  <th className="text-left py-4 px-2 font-semibold text-slate-700">Author</th>
                  <th className="text-left py-4 px-2 font-semibold text-slate-700">Status</th>
                  <th className="text-left py-4 px-2 font-semibold text-slate-700">Views</th>
                  <th className="text-left py-4 px-2 font-semibold text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200">
                    <td className="py-4 px-2">
                      <div className="font-medium text-slate-900">{blog.title}</div>
                      {blog.publishDate && (
                        <div className="text-sm text-slate-500">Published: {blog.publishDate}</div>
                      )}
                    </td>
                    <td className="py-4 px-2 text-slate-600">{blog.author}</td>
                    <td className="py-4 px-2">
                      <Badge 
                        variant={blog.status === 'Published' ? 'default' : 'secondary'}
                        className={blog.status === 'Published' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {blog.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-2 text-slate-600">{blog.views.toLocaleString()}</td>
                    <td className="py-4 px-2">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Admin Dashboard</h1>
              <p className="text-slate-600">Chemical Company Management Portal</p>
            </div>
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: "overview", label: "Overview", icon: TrendingUp },
              { id: "products", label: "Products", icon: Package },
              { id: "blogs", label: "Blogs", icon: FileText },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === "overview" && renderOverview()}
        {activeTab === "products" && renderProducts()}
        {activeTab === "blogs" && renderBlogs()}
      </main>
    </div>
  );
};

export default AdminDashboard;
