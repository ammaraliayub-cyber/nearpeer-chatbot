#!/bin/bash

# API Configuration
API_KEY="YOUR_OPENAI_API_KEY_HERE"
API_ENDPOINT="https://api.openai.com/v1/chat/completions"

echo "🧪 Testing OpenAI API..."
echo "API Key: ${API_KEY:0:20}..."
echo "Endpoint: $API_ENDPOINT"
echo ""

# Test 1: Simple GPT-3.5 request
echo "📝 Test 1: Simple GPT-3.5 request"
curl -s -X POST "$API_ENDPOINT" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Say hello!"}
    ],
    "max_tokens": 50,
    "temperature": 0.7
  }' | jq '.'

echo ""
echo ""

# Test 2: GPT-5 request with the problematic prompt (no temperature)
echo "🧠 Test 2: GPT-5 request with 'Create two MCQs for differential equations' (no temperature)"
curl -s -X POST "$API_ENDPOINT" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5-2025-08-07",
    "messages": [
      {"role": "system", "content": "You are a helpful AI assistant. Provide clear, concise, and helpful responses."},
      {"role": "user", "content": "Create two MCQs for differential equations."}
    ],
    "max_completion_tokens": 2000
  }' | jq '.'

echo ""
echo ""

# Test 3: GPT-5 with reasoning effort and higher tokens
echo "🧠 Test 3: GPT-5 with reasoning effort and higher tokens"
curl -s -X POST "$API_ENDPOINT" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5-2025-08-07",
    "messages": [
      {"role": "system", "content": "You are a helpful AI assistant. Provide clear, concise, and helpful responses."},
      {"role": "user", "content": "Create two MCQs for differential equations."}
    ],
    "max_completion_tokens": 2000,
    "reasoning_effort": "high"
  }' | jq '.'

echo ""
echo "✅ All tests completed!"
