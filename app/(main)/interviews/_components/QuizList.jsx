"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import QuizResult from './QuizResult';

const QuizList = ({ assessments }) => {
    const router = useRouter();

    const [selectedQuiz, setSelectedQuiz] = useState(null)
    return (
        <>
            <Card>
                <CardHeader className={'flex flex-row items-center justify-between'}>
                    <div>
                        <CardTitle className={'text-3xl md:text-4xl gradient-subtitle'}>Recent Quiz's</CardTitle>
                        <CardDescription>Review your past quiz performance</CardDescription>
                    </div>
                    <Button onClick={() => router.push('/interviews/mock')}>
                        Start New Quiz
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {assessments?.map((assessment, i) => (
                            <Card
                                key={assessment.id}
                                className="cursor-pointer bg-muted hover:bg-muted/50 transition-colors"
                                onClick={() => setSelectedQuiz(assessment)}
                            >
                                <CardHeader>
                                    <CardTitle className="gradient-subtitle text-2xl">
                                        Quiz {i + 1}
                                    </CardTitle>
                                    <CardDescription className="flex justify-between w-full">
                                        <div>Score: {assessment.quizScore.toFixed(1)}%</div>
                                        <div>
                                            {format(
                                                new Date(assessment.createdAt),
                                                "MMMM dd, yyyy HH:mm"
                                            )}
                                        </div>
                                    </CardDescription>
                                </CardHeader>
                                {assessment.improvementTip && (
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            {assessment.improvementTip}
                                        </p>
                                    </CardContent>
                                )}
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Dialog Section */}

            <Dialog open={!!selectedQuiz} onOpenChange={()=> setSelectedQuiz(null)} >
                <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                    </DialogHeader>
                    <QuizResult 
                     result={selectedQuiz}
                     onStartNew={()=> router.push('/interviews/mock')}
                     hideStartNew
                    />
                </DialogContent>
            </Dialog>


        </>
    )
}

export default QuizList