"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Video, Cpu, Brain, Activity, AlertTriangle, Bell } from "lucide-react"

export function SystemArchitecture() {
  const architectureSteps = [
    {
      icon: Video,
      title: "Driver Camera Feed",
      description: "1920x1080 @ 30fps video input",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Cpu,
      title: "Preprocessing (OpenCV)",
      description: "Frame extraction, normalization, augmentation",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Brain,
      title: "CNN Feature Extractor",
      description: "Spatial feature extraction from video frames",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Activity,
      title: "LSTM Temporal Model",
      description: "Temporal sequence analysis for activity patterns",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: Brain,
      title: "Activity Classification",
      description: "Multi-class driver activity recognition",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: AlertTriangle,
      title: "Risk Modeling Layer",
      description: "Behavior correlation & risk level computation",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: Bell,
      title: "Feedback / Alerts",
      description: "Real-time driver notifications and warnings",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
  ]

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground">System Architecture</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            End-to-end pipeline for real-time driver state monitoring using computer vision and deep learning
          </p>
        </div>

        <div className="space-y-4">
          {architectureSteps.map((step, index) => (
            <div key={index}>
              <Card className="overflow-hidden border-2 border-border">
                <div className="flex items-center gap-4 p-6">
                  <div
                    className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg ${step.bgColor}`}
                  >
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  <Badge variant="outline">{index + 1}</Badge>
                </div>
              </Card>
              {index < architectureSteps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h4 className="mb-4 font-semibold text-foreground">Tech Stack</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Computer Vision</span>
              <Badge variant="secondary">OpenCV</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Deep Learning</span>
              <Badge variant="secondary">TensorFlow</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Models</span>
              <Badge variant="secondary">CNN + LSTM</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Simulation</span>
              <Badge variant="secondary">CARLA</Badge>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="mb-4 font-semibold text-foreground">Key Improvements</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Recognition Accuracy</span>
              <Badge className="bg-green-500 text-white hover:bg-green-600">+35%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Latency Reduction</span>
              <Badge className="bg-green-500 text-white hover:bg-green-600">-40%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Predictive Precision</span>
              <Badge className="bg-green-500 text-white hover:bg-green-600">+20%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">System Uptime</span>
              <Badge className="bg-green-500 text-white hover:bg-green-600">98.7%</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
