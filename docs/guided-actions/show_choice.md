---
sidebar_position: 5
---

# 4.5 show_choice

Basic JSON Structure

```json
{
  "action_type": "show_choice",
  "payload": {
    "question": "string",
    "options": [
      {
        "label": "string",
        "next_action": {}
      }
    ]
  }
}
```

Explanation: Displays a multiple-choice question; each option can trigger an immediate action.

Example

```json
{
  "action_type": "show_choice",
  "payload": {
    "question": "Which instructional strategy would you prefer?",
    "options": [
      {
        "label": "Lecture",
        "next_action": {
          "action_type": "show_pattern",
          "target": { "context": "PA" },
          "payload": {
            "patterns": [
              {
                "name": "Self-Directed Learning",
                "description": "Self-Directed Learning (SDL) is a popular educational method that encourages learning around real-world problems and empowers students. It uses a five-step structure, akin to problem-solving, comprising goal setting, self planning, self-monitoring, self-evaluation, and revision.",
                "foci": [
                  "Goal-setting",
                  "Self-planning",
                  "Self-monitoring",
                  "Self-evaluation",
                  "Revision"
                ]
              }
            ]
          },
          "ui": { "presentation": "sidebar" }
        }
      }
    ]
  }
}
```
