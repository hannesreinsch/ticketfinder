const steps = {
  step1: {
    question: "Question 1",
    choices: ["step2", "step3"],
  },
  step2: {
    question: "Question 2",
    buttonContent: "Button to Step 2",
    choices: ["step3", "step4"],
  },
  step3: {
    question: "Question 3",
    buttonContent: "Button to Step 3",
    choices: ["step4", "step5"],
  },
  step4: {
    question: "Question 4",
    buttonContent: "Button to Step 4",
    choices: ["step6", "step5"],
  },
  step5: {
    question: "Question 5",
    buttonContent: "Button to Step 5",
    choices: ["step1", "step1"],
  },
}

export default steps
