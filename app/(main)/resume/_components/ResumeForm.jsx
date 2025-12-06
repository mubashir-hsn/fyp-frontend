"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";

const ResumeForm = () => {
    const [contactInfo, setContactInfo] = useState({ email: "", mobile: "", linkedin: "", twitter: "" });
    const [summary, setSummary] = useState("");
    const [skills, setSkills] = useState("");

    // Experience
    const [experience, setExperience] = useState({
        title: "",
        organization: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
    });
    const [expOpen, setExpOpen] = useState(true);

    // Education
    const [education, setEducation] = useState({
        degree: "",
        institution: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
    });
    const [eduOpen, setEduOpen] = useState(false);

    // Project
    const [project, setProject] = useState({
        name: "",
        role: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
    });
    const [projOpen, setProjOpen] = useState(false);

    return (
        <div className="space-y-8 pt-4 pb-6 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-700">Resume Builder</h1>

            {/* Contact Info */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        placeholder="Email"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    />
                    <Input
                        placeholder="Mobile Number"
                        value={contactInfo.mobile}
                        onChange={(e) => setContactInfo({ ...contactInfo, mobile: e.target.value })}
                    />
                    <Input
                        placeholder="LinkedIn Profile URL"
                        value={contactInfo.linkedin}
                        onChange={(e) => setContactInfo({ ...contactInfo, linkedin: e.target.value })}
                    />
                    <Input
                        placeholder="Twitter/X Profile URL"
                        value={contactInfo.twitter}
                        onChange={(e) => setContactInfo({ ...contactInfo, twitter: e.target.value })}
                    />
                </div>
            </div>

            {/* Summary */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Professional Summary</h3>
                <Textarea
                    placeholder="Write a compelling professional summary"
                    className="h-32 bg-muted"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                />
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"

                >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Improve with AI
                </Button>
            </div>

            {/* Skills */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Skills</h3>
                <Textarea
                    placeholder="List your key skills (e.g., JavaScript, React, Node.js)"
                    className="h-24 bg-muted"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                />
            </div>

            {/* Experience */}
            <div className="space-y-4 border rounded p-4">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setExpOpen(!expOpen)}
                >
                    <h3 className="text-lg font-medium">Work Experience</h3>
                    {expOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
                {expOpen && (
                    <div className="space-y-4 mt-2">
                        <div className="grid md:grid-cols-2 gap-4">
                            <Input
                                placeholder="Job Title / Position"
                                value={experience.title}
                                onChange={(e) => setExperience({ ...experience, title: e.target.value })}
                            />
                            <Input
                                placeholder="Organization / Company"
                                value={experience.organization}
                                onChange={(e) => setExperience({ ...experience, organization: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col pb-2">
                                <label className="text-sm font-medium">Start Date</label>
                                <Input
                                    type="month"
                                    value={experience.startDate}
                                    onChange={(e) => setExperience({ ...experience, startDate: e.target.value })}
                                />
                            </div>
                            <div className="flex flex-col pb-2">
                                <label className="text-sm font-medium">End Date</label>
                                <Input
                                    type="month"
                                    value={experience.endDate}
                                    onChange={(e) => setExperience({ ...experience, endDate: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={experience.current}
                                onChange={(e) => setExperience({ ...experience, current: e.target.checked })}
                            />
                            <label className="text-sm">Currently Working Here</label>
                        </div>
                        <Textarea
                            placeholder="Describe your responsibilities and achievements"
                            className="h-32"
                            value={experience.description}
                            onChange={(e) => setExperience({ ...experience, description: e.target.value })}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"

                        >
                            <Sparkles className="h-4 w-4 mr-2" />
                            Improve with AI
                        </Button>
                    </div>
                )}
            </div>

            {/* Education */}
            <div className="space-y-4 border rounded p-4">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setEduOpen(!eduOpen)}
                >
                    <h3 className="text-lg font-medium">Education</h3>
                    {eduOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
                {eduOpen && (
                    <div className="space-y-4 mt-2">
                        <div className="grid md:grid-cols-2 gap-4">
                            <Input
                                placeholder="Degree / Certification"
                                value={education.degree}
                                onChange={(e) => setEducation({ ...education, degree: e.target.value })}
                            />
                            <Input
                                placeholder="Institution / University"
                                value={education.institution}
                                onChange={(e) => setEducation({ ...education, institution: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col pb-2">
                                <label className="text-sm font-medium">Start Date</label>
                                <Input
                                    type="month"
                                    value={education.startDate}
                                    onChange={(e) => setEducation({ ...education, startDate: e.target.value })}
                                />
                            </div>
                            <div className="flex flex-col pb-2">
                                <label className="text-sm font-medium">End Date</label>
                                <Input
                                    type="month"
                                    value={education.endDate}
                                    onChange={(e) => setEducation({ ...education, endDate: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={education.current}
                                onChange={(e) => setEducation({ ...education, current: e.target.checked })}
                            />
                            <label className="text-sm">Currently Studying Here</label>
                        </div>
                        <Textarea
                            placeholder="Describe your coursework or achievements"
                            className="h-32"
                            value={education.description}
                            onChange={(e) => setEducation({ ...education, description: e.target.value })}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"

                        >
                            <Sparkles className="h-4 w-4 mr-2" />
                            Improve with AI
                        </Button>
                    </div>
                )}
            </div>

            {/* Projects */}
            <div className="space-y-4 border rounded p-4">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setProjOpen(!projOpen)}
                >
                    <h3 className="text-lg font-medium">Projects</h3>
                    {projOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
                {projOpen && (
                    <div className="space-y-4 mt-2">
                        <div className="grid md:grid-cols-2 gap-4">
                            <Input
                                placeholder="Project Name"
                                value={project.name}
                                onChange={(e) => setProject({ ...project, name: e.target.value })}
                            />
                            <Input
                                placeholder="Your Role / Position"
                                value={project.role}
                                onChange={(e) => setProject({ ...project, role: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col pb-2">
                                <label className="text-sm font-medium">Start Date</label>
                                <Input
                                    type="month"
                                    value={project.startDate}
                                    onChange={(e) => setProject({ ...project, startDate: e.target.value })}
                                />
                            </div>
                            <div className="flex flex-col pb-2">
                                <label className="text-sm font-medium">End Date</label>
                                <Input
                                    type="month"
                                    value={project.endDate}
                                    onChange={(e) => setProject({ ...project, endDate: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={project.current}
                                onChange={(e) => setProject({ ...project, current: e.target.checked })}
                            />
                            <label className="text-sm">Currently Working on Project</label>
                        </div>
                        <Textarea
                            placeholder="Describe your project details and achievements"
                            className="h-32"
                            value={project.description}
                            onChange={(e) => setProject({ ...project, description: e.target.value })}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"

                        >
                            <Sparkles className="h-4 w-4 mr-2" />
                            Improve with AI
                        </Button>
                    </div>
                )}
            </div>

            <Button className="w-full">Save Resume</Button>
        </div>
    );
};

export default ResumeForm;
