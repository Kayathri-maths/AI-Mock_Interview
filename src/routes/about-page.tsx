import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Target, Users, Zap } from "lucide-react";

export const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              InterviewAI
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to democratize interview preparation and help
            everyone land their dream jobs.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              InterviewAI was founded with a simple belief: everyone deserves
              the opportunity to prepare for their interviews with the best
              tools available.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Using cutting-edge AI technology and expert interview coaching
              principles, we're building the world's most effective interview
              preparation platform.
            </p>
            <Button size="lg" className="gap-2">
              Start Interview Practice <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-8 border border-primary/20">
            <div className="aspect-square flex items-center justify-center">
              <div className="text-6xl opacity-20">🎯</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These core values guide everything we do at InterviewAI
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-3">Excellence</h3>
            <p className="text-muted-foreground text-sm">
              We strive for the highest quality in everything we create
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-3">Accessibility</h3>
            <p className="text-muted-foreground text-sm">
              Interview prep should be accessible to everyone
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-3">Innovation</h3>
            <p className="text-muted-foreground text-sm">
              We leverage cutting-edge AI to drive real results
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-3">Success</h3>
            <p className="text-muted-foreground text-sm">
              Your success is our success
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Built by Experts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team combines expertise in AI, recruiting, and interview
            coaching
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-8 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl opacity-40">👤</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Team Member {i}</h3>
              <p className="text-primary text-sm mb-3">
                Expert in Interview Prep
              </p>
              <p className="text-muted-foreground text-sm">
                Bringing years of experience to help you ace your interviews
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center border-t border-border">
        <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of candidates who are already using InterviewAI to ace
          their interviews
        </p>
        <Button size="lg" className="gap-2">
          Start Free Trial <ArrowRight className="w-5 h-5" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 InterviewAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
