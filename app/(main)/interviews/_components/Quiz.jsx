'use client'

import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Quiz = () => {

    // User input states
    const [quizQuestion, setQuizQuestion] = useState(5);
    const [difficultyLevel, setDifficultyLevel] = useState('beginner');
    const [jobRole, setJobRole] = useState("");
    const [experienceLevel, setExperienceLevel] = useState("");
    const [skills, setSkills] = useState("");
    const [interviewType, setInterviewType] = useState("technical");

    return (

        <Card className="w-full md:w-[95%] mx-auto mt-8">
        <CardHeader>
            <CardTitle>Ready to test your knowledge?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p className="text-muted-foreground">
                Fill the form below to generate your AI-powered quiz.
            </p>

            {/* Job Role */}
            <div className="space-y-2">
                <Label>Job Role</Label>
                <Input
                    placeholder="e.g. Frontend Developer"
                    value={jobRole}
                    onChange={(e) => setJobRole(e.target.value)}
                />
            </div>

            {/* Experience Level */}
            <div className="space-y-2">
                <Label>Experience Level</Label>
                <RadioGroup
                    value={experienceLevel}
                    onValueChange={setExperienceLevel}
                    className="flex gap-4"
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fresher" id="fresher" />
                        <Label htmlFor="fresher">Fresher</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-3" id="1-3" />
                        <Label htmlFor="1-3">1–3 Years</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="senior" id="senior" />
                        <Label htmlFor="senior">Senior</Label>
                    </div>
                </RadioGroup>
            </div>

            {/* Technology Stack */}
            <div className="space-y-2">
                <Label>Technology Stack</Label>
                <Input
                    placeholder="React, Next.js, Node, PostgreSQL"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                />
                <p className=' text-sm text-muted-foreground ps-2'>Separate multiple skills with commas</p>
            </div>

            {/* Interview Type */}
            <div className="space-y-2">
                <Label>Interview Type</Label>
                <RadioGroup
                    value={interviewType}
                    onValueChange={setInterviewType}
                    className="flex gap-4 flex-wrap"
                >
                    {["technical", "hr", "behavioral", "mixed"].map(type => (
                        <div key={type} className="flex items-center space-x-2">
                            <RadioGroupItem value={type} id={type} />
                            <Label htmlFor={type}>{type.toUpperCase()}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>

            {/* Number of Questions */}
            <div className="space-y-2">
                <Label htmlFor="questions">Number of Questions</Label>
                <Input
                    id="questions"
                    type="number"
                    min="5"
                    max="30"
                    value={quizQuestion}
                    onChange={(e) => setQuizQuestion(e.target.value)}
                    placeholder="Enter number of questions 1-30"
                />
            </div>

            {/* Difficulty Level */}
            <div className="space-y-2">
                <Label>Difficulty Level</Label>
                <RadioGroup
                    value={difficultyLevel}
                    onValueChange={setDifficultyLevel}
                    className="flex gap-4"
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="beginner" id="beginner" />
                        <Label htmlFor="beginner">Beginner</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="intermediate" id="intermediate" />
                        <Label htmlFor="intermediate">Intermediate</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="advanced" id="advanced" />
                        <Label htmlFor="advanced">Advanced</Label>
                    </div>
                </RadioGroup>
            </div>

        </CardContent>

        <CardFooter>
            <Button className="w-full">
                Start Quiz
            </Button>
        </CardFooter>
    </Card>
)

}

export default Quiz;
