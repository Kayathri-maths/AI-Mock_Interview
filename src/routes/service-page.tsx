import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

export const ServicesPage = () => {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Services
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive interview preparation tools designed to help you
            succeed
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Service 1 */}
          <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">AI Mock Interviews</h3>
            <p className="text-muted-foreground mb-6">
              Practice real interview scenarios with our advanced AI interviewer
              powered by Google Gemini. Get instant, detailed feedback on your
              responses, tone, pacing, and confidence level.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">30+ Interview Types</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Real-time Feedback</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Performance Analytics</span>
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Interview Types</h3>
            <p className="text-muted-foreground mb-6">
              Master all types of interviews including behavioral, technical,
              case studies, and industry-specific formats. Each category is
              tailored to industry standards.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Behavioral Questions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Technical Interviews</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Case Study Analysis</span>
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Instant Feedback</h3>
            <p className="text-muted-foreground mb-6">
              Get comprehensive analysis immediately after each interview. Our
              AI provides actionable insights to help you improve continuously.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Speech Analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Content Evaluation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Improvement Tips</span>
              </li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Progress Tracking</h3>
            <p className="text-muted-foreground mb-6">
              Track your improvement over time with detailed analytics. See how
              you're progressing and identify areas where you need more
              practice.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Performance Dashboard</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Progress Reports</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Benchmark Scores</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the plan that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p className="text-muted-foreground mb-6">
              Perfect for getting started
            </p>
            <div className="text-4xl font-bold mb-6">Free</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">5 Mock Interviews</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Basic Feedback</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">3 Interview Types</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full bg-transparent">
              Get Started
            </Button>
          </div>

          {/* Professional */}
          <div className="bg-card border border-primary/50 rounded-xl p-8 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Professional</h3>
            <p className="text-muted-foreground mb-6">
              For serious interview prep
            </p>
            <div className="text-4xl font-bold mb-6">
              $29<span className="text-lg text-muted-foreground">/mo</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Unlimited Mock Interviews</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Advanced AI Feedback</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">All Interview Types</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Performance Analytics</span>
              </li>
            </ul>
            <Button className="w-full">Start Trial</Button>
          </div>

          {/* Enterprise */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-muted-foreground mb-6">For organizations</p>
            <div className="text-4xl font-bold mb-6">Custom</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Team Accounts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Advanced Reporting</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Priority Support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Custom Integration</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full bg-transparent">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center border-t border-border">
        <h2 className="text-4xl font-bold mb-6">Ready to Begin?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Start your free trial today. No credit card required.
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
