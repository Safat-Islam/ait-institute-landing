"use client";

import TestimonialCard, { Testimonial } from "@/components/ui/multi-media-testimonial";

const testimonials: Testimonial[] = [
  {
    name: "Alice Johnson",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    title: "Improved Interview Workflow",
    designation: "Software Engineer",
    content:
      "Ruvy transformed the way I manage my interviews. Highly recommended for professionals looking to save time!",
  },
  {
    name: "Bob Smith",
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    title: "Simplicity at Its Best",
    designation: "Product Manager",
    content:
      "The simplicity of this platform is unmatched. Perfect for small teams and startups.",
    thumbnail: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Charlie Lee",
    profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    title: "Creative and Efficient Platform",
    designation: "UX Designer",
    content: "",
    mediaUrl: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm(1)(1)(1).mp4",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
  },
  {
    type: "text",
    name: "Diana Prince",
    profile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    title: "Flawless Scheduling Experience",
    designation: "Full Stack Developer",
    content:
      "The UI is sleek, intuitive, and makes scheduling interviews a breeze. 10/10 experience!",
    rating: 5,
  },
  {
    name: "Ethan Hunt",
    profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
    title: "Streamlined Pipeline Management",
    designation: "DevOps Engineer",
    content:
      "Managing my pipelines has never been easier thanks to this platform. Excellent UX!",
  },
  {
    name: "Fiona Gallagher",
    profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    title: "Smooth and Intuitive Interface",
    designation: "Frontend Developer",
    content: "",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "George Martin",
    profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
    title: "Visually Stunning Design",
    designation: "Backend Developer",
    content: "",
    mediaUrl: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm(1)(1)(1).mp4",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Hannah Lee",
    profile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80",
    title: "Efficient Testing Workflow",
    designation: "QA Engineer",
    content:
      "Testing has become more efficient with the tools provided here. Very intuitive and well-designed.",
  },
  {
    type: "text",
    name: "Ian Wright",
    profile: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=80",
    title: "Time-Saving Integration",
    designation: "Data Scientist",
    content:
      "I can now schedule interviews without leaving my workspace. Saves so much time!",
  },
  {
    name: "Jane Doe",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    title: "Clean Visual Presentation",
    designation: "AI Researcher",
    content: "",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Kyle Brown",
    profile: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80",
    title: "Smooth Playback Experience",
    designation: "UI Designer",
    content: "",
    mediaUrl: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm(1)(1)(1).mp4",
    thumbnail: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Laura Kim",
    profile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    title: "Simple Yet Powerful",
    designation: "Full Stack Developer",
    content:
      "The simplicity of this platform is unmatched. Perfect for small teams and startups.",
  },
  {
    name: "Michael Scott",
    profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
    title: "Organized Interview Management",
    designation: "Project Manager",
    content:
      "I can track and organize interviews effortlessly. Love the clean UI and responsiveness.",
  },
  {
    name: "Nina Patel",
    profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    title: "Elegant Visual Experience",
    designation: "Mobile Developer",
    content: "",
    mediaUrl: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm(1)(1)(1).mp4",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Oscar Wilde",
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    title: "Impressive User Flow",
    designation: "Content Strategist",
    content: "",
    mediaUrl: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm(1)(1)(1).mp4",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Pam Beesly",
    profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    title: "Showcasing Client Feedback",
    designation: "Graphic Designer",
    content:
      "Love the clean testimonial cards and how easy it is to showcase our client feedback.",
  },
  {
    name: "Quentin Tarantino",
    profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    title: "Perfect for Creative Professionals",
    designation: "Video Editor",
    content: "",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Rachel Green",
    profile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80",
    title: "Enhanced Collaboration",
    designation: "Marketing Specialist",
    content: "",
    mediaUrl: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm(1)(1)(1).mp4",
    thumbnail: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Steve Rogers",
    profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
    title: "Streamlined Recruitment Process",
    designation: "Team Lead",
    content:
      "This platform streamlines our recruitment process like never before. Highly efficient!",
  },
  {
    name: "Tina Fey",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    title: "Beautifully Designed Platform",
    designation: "Copywriter",
    content:
      "Beautifully designed, intuitive, and extremely user-friendly. Can't recommend enough!",
  },
];

export default function TestimonialsDemoPage() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 text-foreground">
          Our clients love working with us because we go beyond great design to
          deliver real results.
        </h2>

        {Array.isArray(testimonials) && testimonials.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 [column-fill:_balance]">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            No testimonials yet.
          </p>
        )}
      </div>
    </section>
  );
}
