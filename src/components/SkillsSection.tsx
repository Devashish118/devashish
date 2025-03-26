import React from "react";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";
import { Brush, Figma, Film, Layers, Palette, PenTool } from "lucide-react";

interface SkillProps {
  name: string;
  proficiency: number;
  icon: React.ReactNode;
  color?: string;
}

const SkillItem = ({
  name = "Skill",
  proficiency = 75,
  icon,
  color = "bg-blue-500",
}: SkillProps) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <div className="flex items-center gap-2">
        <div className={cn("p-2 rounded-full", color)}>{icon}</div>
        <span className="font-medium text-lg">{name}</span>
        <span className="ml-auto font-bold">{proficiency}%</span>
      </div>
      <Progress value={proficiency} className="h-2" />
    </div>
  );
};

interface SkillsSectionProps {
  title?: string;
  subtitle?: string;
  skills?: SkillProps[];
}

const SkillsSection = ({
  title = "My Skills",
  subtitle = "I specialize in these design tools and technologies",
  skills = [
    {
      name: "Photoshop",
      proficiency: 95,
      icon: <Palette className="w-5 h-5 text-white" />,
      color: "bg-blue-600",
    },
    {
      name: "Illustrator",
      proficiency: 90,
      icon: <PenTool className="w-5 h-5 text-white" />,
      color: "bg-orange-500",
    },
    {
      name: "Lightroom",
      proficiency: 85,
      icon: <Brush className="w-5 h-5 text-white" />,
      color: "bg-blue-400",
    },
    {
      name: "After Effects",
      proficiency: 80,
      icon: <Layers className="w-5 h-5 text-white" />,
      color: "bg-purple-500",
    },
    {
      name: "Premiere Pro",
      proficiency: 85,
      icon: <Film className="w-5 h-5 text- " />,
      color: "bg-blue-600",
    },
  ],
}: SkillsSectionProps) => {
  return <></>;
};

export default SkillsSection;
