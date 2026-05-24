// components/PathfinderWizard/PathfinderWizard.js

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import React, { forwardRef } from "react";

import { assessmentQuestions, getNextQuestion } from "./data";
import PathfinderStep from "./PathfinderStep";
import ResultPanel from "./ResultPanel";

export default function PathfinderWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Get current question with dynamic options based on answers
  function getCurrentQuestion() {
    const question = assessmentQuestions[currentStep];
    if (!question) return null;

    // If question has dynamic options, generate them based on current answers
    if (typeof question.options === 'function') {
      return {
        ...question,
        options: question.options(answers)
      };
    }

    return question;
  }

  function handleNext() {
    // Use the smart next question logic from data.js
    const nextStepIndex = getNextQuestion(currentStep, answers);
    
    if (nextStepIndex !== null) {
      setCurrentStep(nextStepIndex);
    } else {
      setShowResults(true);
    }
  }

  function handleBack() {
    if (currentStep > 0) {
      // Find the previous valid question (skip questions that shouldn't be shown)
      let prevStep = currentStep - 1;
      let prevQuestion = assessmentQuestions[prevStep];
      
      while (prevStep >= 0 && prevQuestion && prevQuestion.showIf && !prevQuestion.showIf(answers)) {
        prevStep--;
        prevQuestion = assessmentQuestions[prevStep];
      }
      
      if (prevStep >= 0) {
        setCurrentStep(prevStep);
      }
    }
  }

  function setValue(value) {
    const currentQuestion = getCurrentQuestion();
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.key]: value
    }));
  }

  function restartAssessment() {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  }

  // Filter questions for progress calculation (only count visible questions)
  function getVisibleQuestionsCount() {
    return assessmentQuestions.filter(question => 
      !question.showIf || question.showIf(answers)
    ).length;
  }

  const currentQuestion = getCurrentQuestion();
  const progress = ((currentStep + 1) / assessmentQuestions.length) * 100;

  return (
    <section className="pathfinder-section py-5 ">
      <div className="container my-lg-5">
        {/* Header */}
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LucideIcons.Compass size={48} className="text-secondry mb-3" />
            <h2 className="display-5 fw-bold text-dark mb-3">
              Career Pathfinder
            </h2>
            <p className="lead text-muted">
              Discover your ideal career path with personalized recommendations from WBMDFC
            </p>
          </motion.div>
        </div>

        {!showResults ? (
          <>
            {/* Progress Bar */}
            <div className="row justify-content-center mb-4">
              <div className="col-lg-8">
                <div className="progress progress-lg mb-2">
                  <motion.div
                    className="progress-bar bg-secondry"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <small className="text-muted">Progress</small>
                  <small className="text-muted">
                    {currentStep + 1} of {assessmentQuestions.length}
                  </small>
                </div>
              </div>
            </div>

            {/* Assessment Steps */}
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                  >
                    {currentQuestion ? (
                      <PathfinderStep
                        step={currentQuestion}
                        value={answers[currentQuestion.key]}
                        setValue={setValue}
                        onNext={handleNext}
                        onBack={handleBack}
                        index={currentStep}
                        total={assessmentQuestions.length}
                        answers={answers} // Pass answers to PathfinderStep for context
                      />
                    ) : (
                      <div className="alert alert-warning">
                        Question not found. Please restart the assessment.
                        <button className="btn btn-warning ms-3" onClick={restartAssessment}>
                          Restart
                        </button>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </>
        ) : (
          /* Results */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ResultPanel answers={answers} />
            <div className="text-center mt-4">
              <button
                className="btn btn-outline-primary btn-lg"
                onClick={restartAssessment}
              >
                <LucideIcons.RotateCcw size={20} className="me-2" />
                Take Assessment Again
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
