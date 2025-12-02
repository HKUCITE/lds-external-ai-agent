---
sidebar_position: 2
---

# 8.1.2 Components of an Error Object

### **Code:**

A predefined error type identifying the category of the problem. See section 8.2 for the list.

### **Message:**

Short, human‑readable description of the problem for quick understanding.

### **Location:**

Precise JSON path to the problematic field.  
Example: actions\[0\].target.context

Breakdown:

- actions → Top‑level array in the request
- \[0\] → First element in the array (zero‑indexed)
- target → Nested object inside the action
- context → Exact field that is missing or invalid

Purpose:
Pinpoints exactly where the error occurred and supports multi‑error reporting.

### **Expected Format:**

Describes the correct schema for the problematic field.

Rules:

- Always an object
- Must include "type"
- Include "allowed_values"
  - Appears only if the field’s value must be restricted to an enumeration.
  - An array representing an enumeration.
- Include "items"
  - Appears only if type = "array".
  - An object describing the schema for array elements.
- Include "properties" if type = "object"
  - Appears only if type = "object".
  - An object describing the schema for object fields.
