import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Zero Gravity Adventures: What It's Really Like to Float in Space",
      excerpt: "Former space tourist shares incredible moments of weightlessness during their orbital mission. From learning to move in zero gravity to the pure joy of floating freely above Earth.",
      author: "Captain Lisa Rodriguez",
      date: "December 20, 2023",
      category: "Experience",
      readTime: "6 min read",
      image: "/lovable-uploads/5bbc895a-aa1d-4d74-a8e3-2e7fad9ca919.png",
      featured: true
    },
    {
      title: "Space Games: How Astronauts Have Fun in Zero Gravity",
      excerpt: "Discover the playful side of space travel! Learn about the games and activities that space tourists and astronauts enjoy during their orbital adventures, from floating sports to creative photography.",
      author: "Dr. Mike Chen",
      date: "December 18, 2023",
      category: "Lifestyle",
      readTime: "7 min read",
      image: "/lovable-uploads/37bdd2e8-554d-445a-a81f-f1877742cea1.png",
      featured: true
    },
    {
      title: "The Future of Space Tourism: What to Expect in 2024",
      excerpt: "As we advance into 2024, space tourism is becoming more accessible than ever. Learn about the latest developments in spacecraft technology and upcoming missions.",
      author: "Dr. Sarah Chen",
      date: "December 15, 2023",
      category: "Technology",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop"
    },
    {
      title: "Training for Your Space Mission: A Complete Guide",
      excerpt: "Preparing for space travel requires physical and mental preparation. Here's everything you need to know about astronaut training for civilian space tourists.",
      author: "Commander Mike Rodriguez",
      date: "December 12, 2023", 
      category: "Training",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop"
    },
    {
      title: "Life Aboard the ISS: A Tourist's Perspective",
      excerpt: "Former space tourist shares their incredible experience living and working alongside professional astronauts on the International Space Station.",
      author: "Jennifer Park",
      date: "December 10, 2023",
      category: "Experience",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="container mx-auto px-4 pt-32 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Space Tourism Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest news, insights, and stories from the world of space tourism. 
            Learn from experts and fellow space travelers.
          </p>
        </div>

        {/* Featured Post */}
        <Card className="mb-12 bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <div className="h-64 md:h-full bg-gradient-stellar" />
            </div>
            <div className="md:w-2/3 p-8">
              <Badge className="mb-4">Featured</Badge>
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                SpaceX Announces New Lunar Tourism Missions for 2024
              </CardTitle>
              <p className="text-muted-foreground text-lg mb-6">
                In a groundbreaking announcement, SpaceX has revealed plans for civilian lunar tourism missions starting in late 2024. 
                These missions will offer unprecedented views of the Moon and Earth from deep space.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>By Elon Musk</span>
                  <span>•</span>
                  <span>December 18, 2023</span>
                  <span>•</span>
                  <span>10 min read</span>
                </div>
                <Button variant="outline">Read More</Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-stellar transition-all duration-300">
              {post.image ? (
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20" />
              )}
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-stellar p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest space tourism news, mission updates, 
            and exclusive offers delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-lg border-0 bg-white/20 text-white placeholder-white/70 backdrop-blur-sm"
            />
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Blog;