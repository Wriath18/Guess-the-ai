export interface AIModel {
  id: number;
  name: string;
  isReal: boolean;
  fullNameWithCompany: string;
}

export const ALL_MODELS: AIModel[] = [
  {
    "id": 1,
    "name": "Falcon-H1-7B",
    "isReal": true,
    "fullNameWithCompany": "Technology Innovation Institute (TII) — Falcon-H1-7B"
  },
  {
    "id": 2,
    "name": "3-Next-80B-A3B-Base",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3-Next-80B-A3B-Base"
  },
  {
    "id": 3,
    "name": "Omega-3-Nano-7B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Omega-3-Nano-7B (generated for the game)"
  },
  {
    "id": 4,
    "name": "Textstral 3",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Textstral 3 (generated for the game)"
  },
  {
    "id": 5,
    "name": "3-4B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3-4B"
  },
  {
    "id": 6,
    "name": "Tensor 5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Tensor 5 (generated for the game)"
  },
  {
    "id": 7,
    "name": "Kimi-Orbit-32B-A4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kimi-Orbit-32B-A4B (generated for the game)"
  },
  {
    "id": 8,
    "name": "Boreal Reason 2.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Boreal Reason 2.5 (generated for the game)"
  },
  {
    "id": 9,
    "name": "Nova Edge",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nova Edge (generated for the game)"
  },
  {
    "id": 10,
    "name": "Jade-2.5-Think-1.3B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Jade-2.5-Think-1.3B (generated for the game)"
  },
  {
    "id": 11,
    "name": "MiMo-V2-Flash",
    "isReal": true,
    "fullNameWithCompany": "Xiaomi MiMo — MiMo-V2-Flash"
  },
  {
    "id": 12,
    "name": "3.7-Omni-32B-A4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 3.7-Omni-32B-A4B (generated for the game)"
  },
  {
    "id": 13,
    "name": "QVQ-Max",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — QVQ-Max"
  },
  {
    "id": 14,
    "name": "Matrix-4-Code-24B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Matrix-4-Code-24B (generated for the game)"
  },
  {
    "id": 15,
    "name": "Ministral 3 14B",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Ministral 3 14B"
  },
  {
    "id": 16,
    "name": "Opus 5.5",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Opus 5.5"
  },
  {
    "id": 17,
    "name": "Quartz Code 4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Quartz Code 4 (generated for the game)"
  },
  {
    "id": 18,
    "name": "3-30B-A3B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3-30B-A3B"
  },
  {
    "id": 19,
    "name": "Mythos 5",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Mythos 5"
  },
  {
    "id": 20,
    "name": "M3-her",
    "isReal": false,
    "fullNameWithCompany": "Fictional — M3-her (generated for the game)"
  },
  {
    "id": 21,
    "name": "4.1 nano",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-4.1 nano"
  },
  {
    "id": 22,
    "name": "3.8-VL-48B-A6B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 3.8-VL-48B-A6B (generated for the game)"
  },
  {
    "id": 23,
    "name": "Relay 3B Reasoning",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Relay 3B Reasoning (generated for the game)"
  },
  {
    "id": 24,
    "name": "NovaCore 12B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — NovaCore 12B Preview (generated for the game)"
  },
  {
    "id": 25,
    "name": "Pixtral Large",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Pixtral Large"
  },
  {
    "id": 26,
    "name": "Granite-4.2-2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Granite-4.2-2B (generated for the game)"
  },
  {
    "id": 27,
    "name": "Lumen-4.1-Flash-7B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Lumen-4.1-Flash-7B (generated for the game)"
  },
  {
    "id": 28,
    "name": "30B",
    "isReal": true,
    "fullNameWithCompany": "Sarvam AI — Sarvam 30B"
  },
  {
    "id": 29,
    "name": "Phi-5-multimodal",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Phi-5-multimodal (generated for the game)"
  },
  {
    "id": 30,
    "name": "OCR",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Mistral OCR"
  },
  {
    "id": 31,
    "name": "Granite-3.0-3B-A800M-Instruct",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-3.0-3B-A800M-Instruct"
  },
  {
    "id": 32,
    "name": "Nova Act",
    "isReal": true,
    "fullNameWithCompany": "Amazon — Amazon Nova Act"
  },
  {
    "id": 33,
    "name": "3.8-Reasoner-70B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 3.8-Reasoner-70B (generated for the game)"
  },
  {
    "id": 34,
    "name": "R2-Distill-Qwen-12B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — R2-Distill-Qwen-12B (generated for the game)"
  },
  {
    "id": 35,
    "name": "3.8-27B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.8-27B"
  },
  {
    "id": 36,
    "name": "LFM2.5-350M",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-350M"
  },
  {
    "id": 37,
    "name": "MiMo-V3-Flash",
    "isReal": false,
    "fullNameWithCompany": "Fictional — MiMo-V3-Flash (generated for the game)"
  },
  {
    "id": 38,
    "name": "Granite-4.0-H-350M",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-4.0-H-350M"
  },
  {
    "id": 39,
    "name": "VectorGemma 1B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — VectorGemma 1B (generated for the game)"
  },
  {
    "id": 40,
    "name": "Scout 4",
    "isReal": true,
    "fullNameWithCompany": "Meta — Llama 4 Scout"
  },
  {
    "id": 41,
    "name": "Sonnet 4.5",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Sonnet 4.5"
  },
  {
    "id": 42,
    "name": "Sonnet 4.6",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Sonnet 4.6"
  },
  {
    "id": 43,
    "name": "Flux 1.3B Reasoning",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Flux 1.3B Reasoning (generated for the game)"
  },
  {
    "id": 44,
    "name": "Daybreak Red",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — Daybreak Red"
  },
  {
    "id": 45,
    "name": "V3.3-Exp",
    "isReal": false,
    "fullNameWithCompany": "Fictional — V3.3-Exp (generated for the game)"
  },
  {
    "id": 46,
    "name": "Jade 0.8B Base",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Jade 0.8B Base (generated for the game)"
  },
  {
    "id": 47,
    "name": "Aster-5-Live-7B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Aster-5-Live-7B (generated for the game)"
  },
  {
    "id": 48,
    "name": "Molmo 3 6B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Molmo 3 6B (generated for the game)"
  },
  {
    "id": 49,
    "name": "Granite 4.1 30B",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite 4.1 30B"
  },
  {
    "id": 50,
    "name": "Ember 3B Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Ember 3B Instruct (generated for the game)"
  },
  {
    "id": 51,
    "name": "Gemma 3n E2B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemma 3n E2B"
  },
  {
    "id": 52,
    "name": "Kimi-K2-Base",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Kimi-K2-Base"
  },
  {
    "id": 53,
    "name": "VL-01",
    "isReal": true,
    "fullNameWithCompany": "MiniMax — MiniMax-VL-01"
  },
  {
    "id": 54,
    "name": "Tensor 2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Tensor 2 (generated for the game)"
  },
  {
    "id": 55,
    "name": "GLM-5",
    "isReal": true,
    "fullNameWithCompany": "Z.ai — GLM-5"
  },
  {
    "id": 56,
    "name": "Triton 5.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Triton 5.1 (generated for the game)"
  },
  {
    "id": 57,
    "name": "Nemotron 3 Nano",
    "isReal": true,
    "fullNameWithCompany": "NVIDIA — Nemotron 3 Nano"
  },
  {
    "id": 58,
    "name": "3.3 70B Instruct",
    "isReal": true,
    "fullNameWithCompany": "Meta — Llama 3.3 70B Instruct"
  },
  {
    "id": 59,
    "name": "Seed Reasoner Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Seed Reasoner Preview (generated for the game)"
  },
  {
    "id": 60,
    "name": "MiMo-V2.7-Pro",
    "isReal": false,
    "fullNameWithCompany": "Fictional — MiMo-V2.7-Pro (generated for the game)"
  },
  {
    "id": 61,
    "name": "Small 4",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Mistral Small 4"
  },
  {
    "id": 62,
    "name": "Aria 4.7",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Aria 4.7 (generated for the game)"
  },
  {
    "id": 63,
    "name": "2.5-Omni-7B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen2.5-Omni-7B"
  },
  {
    "id": 64,
    "name": "Nimbus 3.9",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nimbus 3.9 (generated for the game)"
  },
  {
    "id": 65,
    "name": "Seed1.8",
    "isReal": true,
    "fullNameWithCompany": "ByteDance Seed — Seed1.8"
  },
  {
    "id": 66,
    "name": "MiMo-Embodied-7B",
    "isReal": true,
    "fullNameWithCompany": "Xiaomi MiMo — MiMo-Embodied-7B"
  },
  {
    "id": 67,
    "name": "Quartz-32B-A4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Quartz-32B-A4B (generated for the game)"
  },
  {
    "id": 68,
    "name": "Grok 4 Heavy",
    "isReal": true,
    "fullNameWithCompany": "xAI — Grok 4 Heavy"
  },
  {
    "id": 69,
    "name": "GLM-5.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — GLM-5.1 (generated for the game)"
  },
  {
    "id": 70,
    "name": "Omega Nano 4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Omega Nano 4 (generated for the game)"
  },
  {
    "id": 71,
    "name": "MiMo-VL-7B-SFT",
    "isReal": true,
    "fullNameWithCompany": "Xiaomi MiMo — MiMo-VL-7B-SFT"
  },
  {
    "id": 72,
    "name": "Falcon-H1R-14B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Falcon-H1R-14B (generated for the game)"
  },
  {
    "id": 73,
    "name": "R1-0528",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-R1-0528"
  },
  {
    "id": 74,
    "name": "Boreal Think 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Boreal Think 4.2 (generated for the game)"
  },
  {
    "id": 75,
    "name": "QwX-24B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — QwX-24B (generated for the game)"
  },
  {
    "id": 76,
    "name": "Cognistral Medium",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Cognistral Medium (generated for the game)"
  },
  {
    "id": 77,
    "name": "Sigma-3-Mini-24B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sigma-3-Mini-24B (generated for the game)"
  },
  {
    "id": 78,
    "name": "Granite-Guardian-3.0-2B",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-Guardian-3.0-2B"
  },
  {
    "id": 79,
    "name": "Wave VL 4.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Wave VL 4.1 (generated for the game)"
  },
  {
    "id": 80,
    "name": "Ember 7B Reasoning",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Ember 7B Reasoning (generated for the game)"
  },
  {
    "id": 81,
    "name": "Omega-3-Nano-72B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Omega-3-Nano-72B (generated for the game)"
  },
  {
    "id": 82,
    "name": "LFM2.5-Encoder-230M",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-Encoder-230M"
  },
  {
    "id": 83,
    "name": "Falcon3 7B",
    "isReal": true,
    "fullNameWithCompany": "Technology Innovation Institute (TII) — Falcon3 7B"
  },
  {
    "id": 84,
    "name": "Flash TTS 2.5",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 2.5 Flash TTS"
  },
  {
    "id": 85,
    "name": "OLMo-2-1124-7B-Instruct",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — OLMo-2-1124-7B-Instruct"
  },
  {
    "id": 86,
    "name": "GLM-4.7",
    "isReal": true,
    "fullNameWithCompany": "Z.ai — GLM-4.7"
  },
  {
    "id": 87,
    "name": "M",
    "isReal": true,
    "fullNameWithCompany": "Sarvam AI — Sarvam-M"
  },
  {
    "id": 88,
    "name": "Flux-0.8B-A6B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Flux-0.8B-A6B (generated for the game)"
  },
  {
    "id": 89,
    "name": "Gemma 4 12B Unified",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemma 4 12B Unified"
  },
  {
    "id": 90,
    "name": "Flash Live 2.5",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 2.5 Flash Live"
  },
  {
    "id": 91,
    "name": "Grok 4",
    "isReal": true,
    "fullNameWithCompany": "xAI — Grok 4"
  },
  {
    "id": 92,
    "name": "Leanstral 2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Leanstral 2 (generated for the game)"
  },
  {
    "id": 93,
    "name": "Olmo-2-0425-1B-RLVR1",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — Olmo-2-0425-1B-RLVR1"
  },
  {
    "id": 94,
    "name": "GLM-4.8",
    "isReal": false,
    "fullNameWithCompany": "Fictional — GLM-4.8 (generated for the game)"
  },
  {
    "id": 95,
    "name": "Omega-2.5-Pro-48B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Omega-2.5-Pro-48B (generated for the game)"
  },
  {
    "id": 96,
    "name": "GLM-4.8-Air",
    "isReal": false,
    "fullNameWithCompany": "Fictional — GLM-4.8-Air (generated for the game)"
  },
  {
    "id": 97,
    "name": "2.5-Coder-7B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen2.5-Coder-7B"
  },
  {
    "id": 98,
    "name": "Sonnet 5.5",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Sonnet 5.5"
  },
  {
    "id": 99,
    "name": "Granite 4.1 8B",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite 4.1 8B"
  },
  {
    "id": 100,
    "name": "Aster-3.5-Live-12B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Aster-3.5-Live-12B (generated for the game)"
  },
  {
    "id": 101,
    "name": "ShieldGemma 2",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — ShieldGemma 2"
  },
  {
    "id": 102,
    "name": "Wave Reason 2.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Wave Reason 2.5 (generated for the game)"
  },
  {
    "id": 103,
    "name": "Kernel 48B Reasoning",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kernel 48B Reasoning (generated for the game)"
  },
  {
    "id": 104,
    "name": "Voxtral Mini Transcribe V2",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Voxtral Mini Transcribe V2"
  },
  {
    "id": 105,
    "name": "Pulse-3-Flash-7B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Pulse-3-Flash-7B (generated for the game)"
  },
  {
    "id": 106,
    "name": "Glyph Live 4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Glyph Live 4 (generated for the game)"
  },
  {
    "id": 107,
    "name": "grok-4-1-fast-reasoning",
    "isReal": true,
    "fullNameWithCompany": "xAI — grok-4-1-fast-reasoning"
  },
  {
    "id": 108,
    "name": "VLo-Plus",
    "isReal": false,
    "fullNameWithCompany": "Fictional — VLo-Plus (generated for the game)"
  },
  {
    "id": 109,
    "name": "Wave-12B-A2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Wave-12B-A2B (generated for the game)"
  },
  {
    "id": 110,
    "name": "Gemma 4n E3B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Gemma 4n E3B (generated for the game)"
  },
  {
    "id": 111,
    "name": "M2-her",
    "isReal": true,
    "fullNameWithCompany": "MiniMax — M2-her"
  },
  {
    "id": 112,
    "name": "Flash-Lite TTS 3.8",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3.8 Flash-Lite TTS"
  },
  {
    "id": 113,
    "name": "M2.7",
    "isReal": true,
    "fullNameWithCompany": "MiniMax — MiniMax-M2.7"
  },
  {
    "id": 114,
    "name": "Wave-2.5-Reason-48B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Wave-2.5-Reason-48B (generated for the game)"
  },
  {
    "id": 115,
    "name": "Sigma-32B-A2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sigma-32B-A2B (generated for the game)"
  },
  {
    "id": 116,
    "name": "Ballad 5.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Ballad 5.1 (generated for the game)"
  },
  {
    "id": 117,
    "name": "Ember-4.1-Think-24B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Ember-4.1-Think-24B (generated for the game)"
  },
  {
    "id": 118,
    "name": "RelayGemma 480M",
    "isReal": false,
    "fullNameWithCompany": "Fictional — RelayGemma 480M (generated for the game)"
  },
  {
    "id": 119,
    "name": "Voxtral Small",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Voxtral Small"
  },
  {
    "id": 120,
    "name": "Tensor 2.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Tensor 2.5 (generated for the game)"
  },
  {
    "id": 121,
    "name": "Vision",
    "isReal": true,
    "fullNameWithCompany": "Sarvam AI — Sarvam Vision"
  },
  {
    "id": 122,
    "name": "Jade Think 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Jade Think 4.2 (generated for the game)"
  },
  {
    "id": 123,
    "name": "Llama-3.3-Nemotron-Super-49B-v1",
    "isReal": true,
    "fullNameWithCompany": "NVIDIA — Llama-3.3-Nemotron-Super-49B-v1"
  },
  {
    "id": 124,
    "name": "Grok 4.20",
    "isReal": true,
    "fullNameWithCompany": "xAI — Grok 4.20"
  },
  {
    "id": 125,
    "name": "3.5-Max-Preview",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.5-Max-Preview"
  },
  {
    "id": 126,
    "name": "Yotta Edge 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Yotta Edge 4.2 (generated for the game)"
  },
  {
    "id": 127,
    "name": "Large 2.1",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Mistral Large 2.1"
  },
  {
    "id": 128,
    "name": "Aya Vision 32B",
    "isReal": true,
    "fullNameWithCompany": "Cohere / Cohere Labs — Aya Vision 32B"
  },
  {
    "id": 129,
    "name": "MedGemma 4B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — MedGemma 4B"
  },
  {
    "id": 130,
    "name": "Ministral 8B",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Ministral 8B"
  },
  {
    "id": 131,
    "name": "Phi-4-mini-reasoning",
    "isReal": true,
    "fullNameWithCompany": "Microsoft — Phi-4-mini-reasoning"
  },
  {
    "id": 132,
    "name": "5.7 Luna",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 5.7 Luna (generated for the game)"
  },
  {
    "id": 133,
    "name": "Gemma 4 E2B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemma 4 E2B"
  },
  {
    "id": 134,
    "name": "Rosalind-Research",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-Rosalind-Research"
  },
  {
    "id": 135,
    "name": "Granite 3.3 2B Instruct",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite 3.3 2B Instruct"
  },
  {
    "id": 136,
    "name": "Tensor-3.2-Nano-72B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Tensor-3.2-Nano-72B (generated for the game)"
  },
  {
    "id": 137,
    "name": "Pro 3.1",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3.1 Pro"
  },
  {
    "id": 138,
    "name": "o1",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — o1"
  },
  {
    "id": 139,
    "name": "M2.5",
    "isReal": true,
    "fullNameWithCompany": "MiniMax — MiniMax-M2.5"
  },
  {
    "id": 140,
    "name": "Flash-Lite 2.5",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 2.5 Flash-Lite"
  },
  {
    "id": 141,
    "name": "Pulse 3",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Pulse 3 (generated for the game)"
  },
  {
    "id": 142,
    "name": "Ministral 3 3B",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Ministral 3 3B"
  },
  {
    "id": 143,
    "name": "Ministral 3B",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Ministral 3B"
  },
  {
    "id": 144,
    "name": "Leanstral 1.5",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Leanstral 1.5"
  },
  {
    "id": 145,
    "name": "2.5-Coder-0.5B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen2.5-Coder-0.5B"
  },
  {
    "id": 146,
    "name": "Kimi-K2.5",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Kimi-K2.5"
  },
  {
    "id": 147,
    "name": "Umbra 3.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Umbra 3.2 (generated for the game)"
  },
  {
    "id": 148,
    "name": "Pulse Reason 3.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Pulse Reason 3.5 (generated for the game)"
  },
  {
    "id": 149,
    "name": "Umbra-2.5-Nano-48B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Umbra-2.5-Nano-48B (generated for the game)"
  },
  {
    "id": 150,
    "name": "3-14B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3-14B"
  },
  {
    "id": 151,
    "name": "Ember 3",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Ember 3 (generated for the game)"
  },
  {
    "id": 152,
    "name": "LFM2.5-2.6B-Base",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-2.6B-Base"
  },
  {
    "id": 153,
    "name": "Pro 2.5",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 2.5 Pro"
  },
  {
    "id": 154,
    "name": "Gemma 3 12B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemma 3 12B"
  },
  {
    "id": 155,
    "name": "M2.1",
    "isReal": true,
    "fullNameWithCompany": "MiniMax — MiniMax-M2.1"
  },
  {
    "id": 156,
    "name": "MedGemma 27B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — MedGemma 27B"
  },
  {
    "id": 157,
    "name": "Wave 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Wave 4.2 (generated for the game)"
  },
  {
    "id": 158,
    "name": "Zephyr 7B Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Zephyr 7B Instruct (generated for the game)"
  },
  {
    "id": 159,
    "name": "Nemotron-Nano-12B-v2",
    "isReal": true,
    "fullNameWithCompany": "NVIDIA — NVIDIA-Nemotron-Nano-12B-v2"
  },
  {
    "id": 160,
    "name": "Falcon3 1B",
    "isReal": true,
    "fullNameWithCompany": "Technology Innovation Institute (TII) — Falcon3 1B"
  },
  {
    "id": 161,
    "name": "Granite-3.0-8B-Instruct",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-3.0-8B-Instruct"
  },
  {
    "id": 162,
    "name": "3-0.6B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3-0.6B"
  },
  {
    "id": 163,
    "name": "Glyph 4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Glyph 4 (generated for the game)"
  },
  {
    "id": 164,
    "name": "MiMo-VL-12B-RL",
    "isReal": false,
    "fullNameWithCompany": "Fictional — MiMo-VL-12B-RL (generated for the game)"
  },
  {
    "id": 165,
    "name": "Vertex 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Vertex 4.2 (generated for the game)"
  },
  {
    "id": 166,
    "name": "Magistral Medium 1.1",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Magistral Medium 1.1"
  },
  {
    "id": 167,
    "name": "NovaCore 3B Base",
    "isReal": false,
    "fullNameWithCompany": "Fictional — NovaCore 3B Base (generated for the game)"
  },
  {
    "id": 168,
    "name": "LFM2.5-VL-DSpark",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-VL-DSpark"
  },
  {
    "id": 169,
    "name": "o3",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — o3"
  },
  {
    "id": 170,
    "name": "Kimi-K2-Instruct-0905",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Kimi-K2-Instruct-0905"
  },
  {
    "id": 171,
    "name": "Tapestry 3.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Tapestry 3.5 (generated for the game)"
  },
  {
    "id": 172,
    "name": "Lyric 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Lyric 4.2 (generated for the game)"
  },
  {
    "id": 173,
    "name": "Relay Nano 3.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Relay Nano 3.5 (generated for the game)"
  },
  {
    "id": 174,
    "name": "Pro 3.4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Pro 3.4 (generated for the game)"
  },
  {
    "id": 175,
    "name": "Pulse 2B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Pulse 2B Preview (generated for the game)"
  },
  {
    "id": 176,
    "name": "3-Coder-480B-A35B-Instruct",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3-Coder-480B-A35B-Instruct"
  },
  {
    "id": 177,
    "name": "Ministral 3 8B",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Ministral 3 8B"
  },
  {
    "id": 178,
    "name": "Zephyr 2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Zephyr 2 (generated for the game)"
  },
  {
    "id": 179,
    "name": "Aya Vision 14B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Aya Vision 14B (generated for the game)"
  },
  {
    "id": 180,
    "name": "Magistral Small 1.1",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Magistral Small 1.1"
  },
  {
    "id": 181,
    "name": "Rerank 4",
    "isReal": true,
    "fullNameWithCompany": "Cohere / Cohere Labs — Rerank 4"
  },
  {
    "id": 182,
    "name": "Falcon-H1-1.5B",
    "isReal": true,
    "fullNameWithCompany": "Technology Innovation Institute (TII) — Falcon-H1-1.5B"
  },
  {
    "id": 183,
    "name": "Granite-Guardian-3.0-8B",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-Guardian-3.0-8B"
  },
  {
    "id": 184,
    "name": "Falcon3 10B",
    "isReal": true,
    "fullNameWithCompany": "Technology Innovation Institute (TII) — Falcon3 10B"
  },
  {
    "id": 185,
    "name": "R1-Distill-Qwen-1.5B",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-R1-Distill-Qwen-1.5B"
  },
  {
    "id": 186,
    "name": "Navigastral Mini",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Navigastral Mini (generated for the game)"
  },
  {
    "id": 187,
    "name": "Pulse VL 3",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Pulse VL 3 (generated for the game)"
  },
  {
    "id": 188,
    "name": "Kernel-2-Pro-24B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kernel-2-Pro-24B (generated for the game)"
  },
  {
    "id": 189,
    "name": "Magistral Small 1.2",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Magistral Small 1.2"
  },
  {
    "id": 190,
    "name": "OLMo-2-0625-2B-RLVR2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — OLMo-2-0625-2B-RLVR2 (generated for the game)"
  },
  {
    "id": 191,
    "name": "Gemma 4 E4B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemma 4 E4B"
  },
  {
    "id": 192,
    "name": "Omni 4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Omni 4 (generated for the game)"
  },
  {
    "id": 193,
    "name": "Cipher 7B Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Cipher 7B Instruct (generated for the game)"
  },
  {
    "id": 194,
    "name": "Yotta-3B-A2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Yotta-3B-A2B (generated for the game)"
  },
  {
    "id": 195,
    "name": "Granite-4.2-H-Nano",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Granite-4.2-H-Nano (generated for the game)"
  },
  {
    "id": 196,
    "name": "Omega 3B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Omega 3B Preview (generated for the game)"
  },
  {
    "id": 197,
    "name": "Halo-32B-A4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Halo-32B-A4B (generated for the game)"
  },
  {
    "id": 198,
    "name": "ActionGemma 320M",
    "isReal": false,
    "fullNameWithCompany": "Fictional — ActionGemma 320M (generated for the game)"
  },
  {
    "id": 199,
    "name": "Glyph-4.2-Nano-24B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Glyph-4.2-Nano-24B (generated for the game)"
  },
  {
    "id": 200,
    "name": "Vertex Code 2.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Vertex Code 2.5 (generated for the game)"
  },
  {
    "id": 201,
    "name": "3-235B-A22B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3-235B-A22B"
  },
  {
    "id": 202,
    "name": "Seed1.6",
    "isReal": true,
    "fullNameWithCompany": "ByteDance Seed — Seed1.6"
  },
  {
    "id": 203,
    "name": "Falcon-H2-12B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Falcon-H2-12B (generated for the game)"
  },
  {
    "id": 204,
    "name": "Aster-72B-A3B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Aster-72B-A3B (generated for the game)"
  },
  {
    "id": 205,
    "name": "MiMo-7B-RL-Zero",
    "isReal": true,
    "fullNameWithCompany": "Xiaomi MiMo — MiMo-7B-RL-Zero"
  },
  {
    "id": 206,
    "name": "Zephyr 4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Zephyr 4 (generated for the game)"
  },
  {
    "id": 207,
    "name": "Bulbul V3",
    "isReal": true,
    "fullNameWithCompany": "Sarvam AI — Bulbul V3"
  },
  {
    "id": 208,
    "name": "NanoGemma 180M",
    "isReal": false,
    "fullNameWithCompany": "Fictional — NanoGemma 180M (generated for the game)"
  },
  {
    "id": 209,
    "name": "Next-96B-A6B-Base",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Next-96B-A6B-Base (generated for the game)"
  },
  {
    "id": 210,
    "name": "Kernel-1.3B-A8B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kernel-1.3B-A8B (generated for the game)"
  },
  {
    "id": 211,
    "name": "Gemma-APS 4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Gemma-APS 4B (generated for the game)"
  },
  {
    "id": 212,
    "name": "5.3 Instant",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5.3 Instant"
  },
  {
    "id": 213,
    "name": "Zephyr 4.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Zephyr 4.1 (generated for the game)"
  },
  {
    "id": 214,
    "name": "Matrix 48B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Matrix 48B Preview (generated for the game)"
  },
  {
    "id": 215,
    "name": "5 mini",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5 mini"
  },
  {
    "id": 216,
    "name": "Flash-Lite 3.4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Flash-Lite 3.4 (generated for the game)"
  },
  {
    "id": 217,
    "name": "Gemma-APS 2B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemma-APS 2B"
  },
  {
    "id": 218,
    "name": "Voxtral 2",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Voxtral 2"
  },
  {
    "id": 219,
    "name": "Tensor 2B Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Tensor 2B Instruct (generated for the game)"
  },
  {
    "id": 220,
    "name": "Aurora",
    "isReal": true,
    "fullNameWithCompany": "xAI — Aurora"
  },
  {
    "id": 221,
    "name": "Small 3.1",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Mistral Small 3.1"
  },
  {
    "id": 222,
    "name": "Yotta 7B Reasoning",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Yotta 7B Reasoning (generated for the game)"
  },
  {
    "id": 223,
    "name": "Olmo-2-0425-1B-DPO",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — Olmo-2-0425-1B-DPO"
  },
  {
    "id": 224,
    "name": "V4.1-Flash",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-V4.1-Flash"
  },
  {
    "id": 225,
    "name": "Glyph-4.1-Code-72B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Glyph-4.1-Code-72B (generated for the game)"
  },
  {
    "id": 226,
    "name": "Omni Flash",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini Omni Flash"
  },
  {
    "id": 227,
    "name": "Falcon-H1-Tiny-120M-Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Falcon-H1-Tiny-120M-Instruct (generated for the game)"
  },
  {
    "id": 228,
    "name": "Medium 3",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Mistral Medium 3"
  },
  {
    "id": 229,
    "name": "Aya Expanse 32B",
    "isReal": true,
    "fullNameWithCompany": "Cohere / Cohere Labs — Aya Expanse 32B"
  },
  {
    "id": 230,
    "name": "Kimi-K2.8",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kimi-K2.8 (generated for the game)"
  },
  {
    "id": 231,
    "name": "QVQ-72B-Preview",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — QVQ-72B-Preview"
  },
  {
    "id": 232,
    "name": "Argon 4",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 4 Argon"
  },
  {
    "id": 233,
    "name": "Sigma Pro 2.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sigma Pro 2.5 (generated for the game)"
  },
  {
    "id": 234,
    "name": "Lumen 32B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Lumen 32B Preview (generated for the game)"
  },
  {
    "id": 235,
    "name": "Mythos 4.9",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Mythos 4.9 (generated for the game)"
  },
  {
    "id": 236,
    "name": "2.5-Coder-14B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen2.5-Coder-14B"
  },
  {
    "id": 237,
    "name": "Sonnet 5.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sonnet 5.1 (generated for the game)"
  },
  {
    "id": 238,
    "name": "Falcon-H1-Tiny-90M-Instruct",
    "isReal": true,
    "fullNameWithCompany": "Technology Innovation Institute (TII) — Falcon-H1-Tiny-90M-Instruct"
  },
  {
    "id": 239,
    "name": "Ember-2-VL-12B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Ember-2-VL-12B (generated for the game)"
  },
  {
    "id": 240,
    "name": "Granite 3.3 2B Base",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite 3.3 2B Base"
  },
  {
    "id": 241,
    "name": "Nova 2 Pro",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nova 2 Pro (generated for the game)"
  },
  {
    "id": 242,
    "name": "OCR 2",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Mistral OCR 2"
  },
  {
    "id": 243,
    "name": "GLM-4.5-Air",
    "isReal": true,
    "fullNameWithCompany": "Z.ai — GLM-4.5-Air"
  },
  {
    "id": 244,
    "name": "1",
    "isReal": true,
    "fullNameWithCompany": "Sarvam AI — Sarvam-1"
  },
  {
    "id": 245,
    "name": "V4-Ultra",
    "isReal": false,
    "fullNameWithCompany": "Fictional — V4-Ultra (generated for the game)"
  },
  {
    "id": 246,
    "name": "Wave 2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Wave 2 (generated for the game)"
  },
  {
    "id": 247,
    "name": "Grok 3 mini (Think)",
    "isReal": true,
    "fullNameWithCompany": "xAI — Grok 3 mini (Think)"
  },
  {
    "id": 248,
    "name": "Flash TTS 3.8",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3.8 Flash TTS"
  },
  {
    "id": 249,
    "name": "Flash-Lite 3.5",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3.5 Flash-Lite"
  },
  {
    "id": 250,
    "name": "Boreal Pro 4.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Boreal Pro 4.1 (generated for the game)"
  },
  {
    "id": 251,
    "name": "Omega 3.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Omega 3.2 (generated for the game)"
  },
  {
    "id": 252,
    "name": "Kimi-Dev-72B",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Kimi-Dev-72B"
  },
  {
    "id": 253,
    "name": "Jade Think 2.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Jade Think 2.5 (generated for the game)"
  },
  {
    "id": 254,
    "name": "Sarvam 210B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sarvam 210B (generated for the game)"
  },
  {
    "id": 255,
    "name": "Yotta-2-Think-0.8B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Yotta-2-Think-0.8B (generated for the game)"
  },
  {
    "id": 256,
    "name": "Maverick 4",
    "isReal": true,
    "fullNameWithCompany": "Meta — Llama 4 Maverick"
  },
  {
    "id": 257,
    "name": "M3",
    "isReal": true,
    "fullNameWithCompany": "MiniMax — MiniMax-M3"
  },
  {
    "id": 258,
    "name": "Flash Live 3.1",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3.1 Flash Live"
  },
  {
    "id": 259,
    "name": "Devstral Medium",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Devstral Medium"
  },
  {
    "id": 260,
    "name": "Boreal Think 4.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Boreal Think 4.1 (generated for the game)"
  },
  {
    "id": 261,
    "name": "Llama-3.1-Nemotron-Ultra-253B-v1",
    "isReal": true,
    "fullNameWithCompany": "NVIDIA — Llama-3.1-Nemotron-Ultra-253B-v1"
  },
  {
    "id": 262,
    "name": "5 nano",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5 nano"
  },
  {
    "id": 263,
    "name": "Mistral Medium 4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Mistral Medium 4 (generated for the game)"
  },
  {
    "id": 264,
    "name": "Zephyr 1.3B Reasoning",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Zephyr 1.3B Reasoning (generated for the game)"
  },
  {
    "id": 265,
    "name": "Zephyr-4.2-Pro-72B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Zephyr-4.2-Pro-72B (generated for the game)"
  },
  {
    "id": 266,
    "name": "CanvasGemma 4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — CanvasGemma 4B (generated for the game)"
  },
  {
    "id": 267,
    "name": "5.2-Codex",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5.2-Codex"
  },
  {
    "id": 268,
    "name": "o4-nano",
    "isReal": false,
    "fullNameWithCompany": "Fictional — o4-nano (generated for the game)"
  },
  {
    "id": 269,
    "name": "Sirocco 2.8",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sirocco 2.8 (generated for the game)"
  },
  {
    "id": 270,
    "name": "Vertex 0.8B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Vertex 0.8B Preview (generated for the game)"
  },
  {
    "id": 271,
    "name": "Wave Edge 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Wave Edge 4.2 (generated for the game)"
  },
  {
    "id": 272,
    "name": "MiMo-Audio-9B-Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — MiMo-Audio-9B-Instruct (generated for the game)"
  },
  {
    "id": 273,
    "name": "Command A Code",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Command A Code (generated for the game)"
  },
  {
    "id": 274,
    "name": "Quasar 3",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Quasar 3 (generated for the game)"
  },
  {
    "id": 275,
    "name": "V4-Flash-Vision-Exp",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-V4-Flash-Vision-Exp"
  },
  {
    "id": 276,
    "name": "Kimi-Audio-12B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kimi-Audio-12B (generated for the game)"
  },
  {
    "id": 277,
    "name": "Falcon-E-7B-Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Falcon-E-7B-Instruct (generated for the game)"
  },
  {
    "id": 278,
    "name": "Nova Vector",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nova Vector (generated for the game)"
  },
  {
    "id": 279,
    "name": "Magistral Medium 1.2",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Magistral Medium 1.2"
  },
  {
    "id": 280,
    "name": "5.6 Terra",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5.6 Terra"
  },
  {
    "id": 281,
    "name": "Umbra-2.5-Code-12B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Umbra-2.5-Code-12B (generated for the game)"
  },
  {
    "id": 282,
    "name": "Boreal Code 3.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Boreal Code 3.2 (generated for the game)"
  },
  {
    "id": 283,
    "name": "Kernel 24B Base",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kernel 24B Base (generated for the game)"
  },
  {
    "id": 284,
    "name": "Nemotron-Ultra-420B-A42B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nemotron-Ultra-420B-A42B (generated for the game)"
  },
  {
    "id": 285,
    "name": "OLMo 3 2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — OLMo 3 2B (generated for the game)"
  },
  {
    "id": 286,
    "name": "Sarvam-T",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sarvam-T (generated for the game)"
  },
  {
    "id": 287,
    "name": "Nemotron-3-Nano-24B-A2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nemotron-3-Nano-24B-A2B (generated for the game)"
  },
  {
    "id": 288,
    "name": "Molmo 2-O 12B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Molmo 2-O 12B (generated for the game)"
  },
  {
    "id": 289,
    "name": "MiMo-Embodied-14B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — MiMo-Embodied-14B (generated for the game)"
  },
  {
    "id": 290,
    "name": "6.2 Astra",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 6.2 Astra (generated for the game)"
  },
  {
    "id": 291,
    "name": "MiMo-V2.6-Flash-RL",
    "isReal": true,
    "fullNameWithCompany": "Xiaomi MiMo — MiMo-V2.6-Flash-RL"
  },
  {
    "id": 292,
    "name": "Kernel 0.8B Reasoning",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kernel 0.8B Reasoning (generated for the game)"
  },
  {
    "id": 293,
    "name": "Aya Vision 8B",
    "isReal": true,
    "fullNameWithCompany": "Cohere / Cohere Labs — Aya Vision 8B"
  },
  {
    "id": 294,
    "name": "Nemotron-3-Nano-30B-A3B",
    "isReal": true,
    "fullNameWithCompany": "NVIDIA — NVIDIA-Nemotron-3-Nano-30B-A3B"
  },
  {
    "id": 295,
    "name": "3.9-Max",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 3.9-Max (generated for the game)"
  },
  {
    "id": 296,
    "name": "Nova 3 Lite",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nova 3 Lite (generated for the game)"
  },
  {
    "id": 297,
    "name": "Yotta 32B Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Yotta 32B Instruct (generated for the game)"
  },
  {
    "id": 298,
    "name": "Leanstral",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Leanstral"
  },
  {
    "id": 299,
    "name": "Quartz 3.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Quartz 3.5 (generated for the game)"
  },
  {
    "id": 300,
    "name": "Omni-24B-A2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Omni-24B-A2B (generated for the game)"
  },
  {
    "id": 301,
    "name": "Yotta Code 3.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Yotta Code 3.2 (generated for the game)"
  },
  {
    "id": 302,
    "name": "Granite 4.2 12B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Granite 4.2 12B (generated for the game)"
  },
  {
    "id": 303,
    "name": "OLMo-2-1124-13B",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — OLMo-2-1124-13B"
  },
  {
    "id": 304,
    "name": "Beacon 3.8",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Beacon 3.8 (generated for the game)"
  },
  {
    "id": 305,
    "name": "Mythos 5.1",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Mythos 5.1"
  },
  {
    "id": 306,
    "name": "Grok 4 Fast",
    "isReal": true,
    "fullNameWithCompany": "xAI — Grok 4 Fast"
  },
  {
    "id": 307,
    "name": "5.1",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5.1"
  },
  {
    "id": 308,
    "name": "Large 3",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Mistral Large 3"
  },
  {
    "id": 309,
    "name": "Tensor-4.2-Live-24B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Tensor-4.2-Live-24B (generated for the game)"
  },
  {
    "id": 310,
    "name": "Catalyst 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Catalyst 4.2 (generated for the game)"
  },
  {
    "id": 311,
    "name": "OlmoEarth-v1-Nano",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — OlmoEarth-v1-Nano"
  },
  {
    "id": 312,
    "name": "QrQ-28B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — QrQ-28B (generated for the game)"
  },
  {
    "id": 313,
    "name": "AgentGemma 1.5B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — AgentGemma 1.5B (generated for the game)"
  },
  {
    "id": 314,
    "name": "Flash 2.5",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 2.5 Flash"
  },
  {
    "id": 315,
    "name": "Kernel Think 2.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kernel Think 2.5 (generated for the game)"
  },
  {
    "id": 316,
    "name": "6 Luna",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-6 Luna"
  },
  {
    "id": 317,
    "name": "NovaCore-2-Reason-24B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — NovaCore-2-Reason-24B (generated for the game)"
  },
  {
    "id": 318,
    "name": "5.7 Sol",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 5.7 Sol (generated for the game)"
  },
  {
    "id": 319,
    "name": "Granite 3.1 3B-A800M",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite 3.1 3B-A800M"
  },
  {
    "id": 320,
    "name": "PaliGemma 3 18B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — PaliGemma 3 18B (generated for the game)"
  },
  {
    "id": 321,
    "name": "T5Gemma 3 2B-2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — T5Gemma 3 2B-2B (generated for the game)"
  },
  {
    "id": 322,
    "name": "Nova 2 Lite",
    "isReal": true,
    "fullNameWithCompany": "Amazon — Amazon Nova 2 Lite"
  },
  {
    "id": 323,
    "name": "OCR 3",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Mistral OCR 3"
  },
  {
    "id": 324,
    "name": "Nova Canvas",
    "isReal": true,
    "fullNameWithCompany": "Amazon — Amazon Nova Canvas"
  },
  {
    "id": 325,
    "name": "Flash 3",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3 Flash"
  },
  {
    "id": 326,
    "name": "Zephyr-3B-A3B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Zephyr-3B-A3B (generated for the game)"
  },
  {
    "id": 327,
    "name": "Flux Think 4.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Flux Think 4.1 (generated for the game)"
  },
  {
    "id": 328,
    "name": "Sigma-72B-A6B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sigma-72B-A6B (generated for the game)"
  },
  {
    "id": 329,
    "name": "Small 3",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Mistral Small 3"
  },
  {
    "id": 330,
    "name": "OLMo 2 1B",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — OLMo 2 1B"
  },
  {
    "id": 331,
    "name": "Sarvam Tejas",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sarvam Tejas (generated for the game)"
  },
  {
    "id": 332,
    "name": "Kestrel 4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kestrel 4 (generated for the game)"
  },
  {
    "id": 333,
    "name": "Phi-4-multimodal-instruct",
    "isReal": true,
    "fullNameWithCompany": "Microsoft — Phi-4-multimodal-instruct"
  },
  {
    "id": 334,
    "name": "Kimi-VL-A3B-Thinking-2506",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Kimi-VL-A3B-Thinking-2506"
  },
  {
    "id": 335,
    "name": "LFM2.5-ColBERT-350M",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-ColBERT-350M"
  },
  {
    "id": 336,
    "name": "Moderation",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Mistral Moderation"
  },
  {
    "id": 337,
    "name": "Gemma 4 E6B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Gemma 4 E6B (generated for the game)"
  },
  {
    "id": 338,
    "name": "VLo",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen VLo"
  },
  {
    "id": 339,
    "name": "Granite-3.0-1B-A400M-Instruct",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-3.0-1B-A400M-Instruct"
  },
  {
    "id": 340,
    "name": "OLMo 3 9B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — OLMo 3 9B (generated for the game)"
  },
  {
    "id": 341,
    "name": "Grok 4.1",
    "isReal": true,
    "fullNameWithCompany": "xAI — Grok 4.1"
  },
  {
    "id": 342,
    "name": "Aster Edge 2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Aster Edge 2 (generated for the game)"
  },
  {
    "id": 343,
    "name": "R1-Distill-Qwen-7B",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-R1-Distill-Qwen-7B"
  },
  {
    "id": 344,
    "name": "LFM2",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2"
  },
  {
    "id": 345,
    "name": "Opus 5",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Opus 5"
  },
  {
    "id": 346,
    "name": "3.8-2.4T-A95B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.8-2.4T-A95B"
  },
  {
    "id": 347,
    "name": "Helios 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Helios 4.2 (generated for the game)"
  },
  {
    "id": 348,
    "name": "R2-Zero",
    "isReal": false,
    "fullNameWithCompany": "Fictional — R2-Zero (generated for the game)"
  },
  {
    "id": 349,
    "name": "R1-Distill-Llama-8B",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-R1-Distill-Llama-8B"
  },
  {
    "id": 350,
    "name": "Relay Code 5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Relay Code 5 (generated for the game)"
  },
  {
    "id": 351,
    "name": "2.5-Coder-1.5B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen2.5-Coder-1.5B"
  },
  {
    "id": 352,
    "name": "LFM2-VL-3B",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2-VL-3B"
  },
  {
    "id": 353,
    "name": "North Mini Code",
    "isReal": true,
    "fullNameWithCompany": "Cohere / Cohere Labs — North Mini Code"
  },
  {
    "id": 354,
    "name": "Flash 3.6",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3.6 Flash"
  },
  {
    "id": 355,
    "name": "Molmo 2 4B",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — Molmo 2 4B"
  },
  {
    "id": 356,
    "name": "6.1 Sol",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-6.1 Sol"
  },
  {
    "id": 357,
    "name": "Glyph Code 2.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Glyph Code 2.5 (generated for the game)"
  },
  {
    "id": 358,
    "name": "R1",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-R1"
  },
  {
    "id": 359,
    "name": "Xenon 4.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Xenon 4.1 (generated for the game)"
  },
  {
    "id": 360,
    "name": "3.5-0.8B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.5-0.8B"
  },
  {
    "id": 361,
    "name": "Seed1.5-VL",
    "isReal": true,
    "fullNameWithCompany": "ByteDance Seed — Seed1.5-VL"
  },
  {
    "id": 362,
    "name": "LFM2.5-1.2B-Base",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-1.2B-Base"
  },
  {
    "id": 363,
    "name": "Strata 5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Strata 5 (generated for the game)"
  },
  {
    "id": 364,
    "name": "Shieldstral Mini",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Shieldstral Mini (generated for the game)"
  },
  {
    "id": 365,
    "name": "3.5 Haiku",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude 3.5 Haiku"
  },
  {
    "id": 366,
    "name": "Saaras V5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Saaras V5 (generated for the game)"
  },
  {
    "id": 367,
    "name": "OLMo-2-1124-7B",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — OLMo-2-1124-7B"
  },
  {
    "id": 368,
    "name": "MiMo-V2.5",
    "isReal": true,
    "fullNameWithCompany": "Xiaomi MiMo — MiMo-V2.5"
  },
  {
    "id": 369,
    "name": "Glyph 72B Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Glyph 72B Instruct (generated for the game)"
  },
  {
    "id": 370,
    "name": "GLM-5.3",
    "isReal": true,
    "fullNameWithCompany": "Z.ai — GLM-5.3"
  },
  {
    "id": 371,
    "name": "Pulse 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Pulse 4.2 (generated for the game)"
  },
  {
    "id": 372,
    "name": "Nemotron 4 Nano",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nemotron 4 Nano (generated for the game)"
  },
  {
    "id": 373,
    "name": "MiMo-V2.5-Pro",
    "isReal": true,
    "fullNameWithCompany": "Xiaomi MiMo — MiMo-V2.5-Pro"
  },
  {
    "id": 374,
    "name": "Jade-4.2-Think-12B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Jade-4.2-Think-12B (generated for the game)"
  },
  {
    "id": 375,
    "name": "Wave 1.3B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Wave 1.3B Preview (generated for the game)"
  },
  {
    "id": 376,
    "name": "V3.1",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-V3.1"
  },
  {
    "id": 377,
    "name": "Nemotron-3-Ultra-550B-A55B",
    "isReal": true,
    "fullNameWithCompany": "NVIDIA — NVIDIA-Nemotron-3-Ultra-550B-A55B"
  },
  {
    "id": 378,
    "name": "Kimi-K2.8-Code",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kimi-K2.8-Code (generated for the game)"
  },
  {
    "id": 379,
    "name": "2.5-Max",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen2.5-Max"
  },
  {
    "id": 380,
    "name": "Gemma 3 27B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemma 3 27B"
  },
  {
    "id": 381,
    "name": "Seed Omni 2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Seed Omni 2 (generated for the game)"
  },
  {
    "id": 382,
    "name": "LFM2.5-Audio-1.5B",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-Audio-1.5B"
  },
  {
    "id": 383,
    "name": "Pulse-2.5-Pro-2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Pulse-2.5-Pro-2B (generated for the game)"
  },
  {
    "id": 384,
    "name": "Small 3.2",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Mistral Small 3.2"
  },
  {
    "id": 385,
    "name": "GLM-5.3-Flash",
    "isReal": true,
    "fullNameWithCompany": "Z.ai — GLM-5.3-Flash"
  },
  {
    "id": 386,
    "name": "QxQ-40B-Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — QxQ-40B-Preview (generated for the game)"
  },
  {
    "id": 387,
    "name": "Umbra-32B-A6B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Umbra-32B-A6B (generated for the game)"
  },
  {
    "id": 388,
    "name": "Fable 5.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Fable 5.2 (generated for the game)"
  },
  {
    "id": 389,
    "name": "3-32B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3-32B"
  },
  {
    "id": 390,
    "name": "Sonnet 4",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Sonnet 4"
  },
  {
    "id": 391,
    "name": "Cipher-24B-A6B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Cipher-24B-A6B (generated for the game)"
  },
  {
    "id": 392,
    "name": "Gemma 4 E1B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Gemma 4 E1B (generated for the game)"
  },
  {
    "id": 393,
    "name": "Granite 3.1 1B-A400M",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite 3.1 1B-A400M"
  },
  {
    "id": 394,
    "name": "Flash Thinking Experimental 2.0",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 2.0 Flash Thinking Experimental"
  },
  {
    "id": 395,
    "name": "4.5",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-4.5"
  },
  {
    "id": 396,
    "name": "Granite 3.3 8B Instruct",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite 3.3 8B Instruct"
  },
  {
    "id": 397,
    "name": "Moonlight-16B-A3B-Instruct",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Moonlight-16B-A3B-Instruct"
  },
  {
    "id": 398,
    "name": "Ministral 11B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Ministral 11B (generated for the game)"
  },
  {
    "id": 399,
    "name": "oss-20b",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — gpt-oss-20b"
  },
  {
    "id": 400,
    "name": "Vector 5.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Vector 5.2 (generated for the game)"
  },
  {
    "id": 401,
    "name": "LFM2.5-230M-Base",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-230M-Base"
  },
  {
    "id": 402,
    "name": "Opus 4.1",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Opus 4.1"
  },
  {
    "id": 403,
    "name": "5.5 Atlas",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 5.5 Atlas (generated for the game)"
  },
  {
    "id": 404,
    "name": "Mythos Preview",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Mythos Preview"
  },
  {
    "id": 405,
    "name": "LFM2.5-VL-700M",
    "isReal": false,
    "fullNameWithCompany": "Fictional — LFM2.5-VL-700M (generated for the game)"
  },
  {
    "id": 406,
    "name": "Kimi-K2-Thinking",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Kimi-K2-Thinking"
  },
  {
    "id": 407,
    "name": "Voxtral Nano",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Voxtral Nano (generated for the game)"
  },
  {
    "id": 408,
    "name": "Kimi-K2-Instruct",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Kimi-K2-Instruct"
  },
  {
    "id": 409,
    "name": "V4.2-Pro",
    "isReal": false,
    "fullNameWithCompany": "Fictional — V4.2-Pro (generated for the game)"
  },
  {
    "id": 410,
    "name": "Omega Nano 3.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Omega Nano 3.5 (generated for the game)"
  },
  {
    "id": 411,
    "name": "Chronicle 5.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Chronicle 5.1 (generated for the game)"
  },
  {
    "id": 412,
    "name": "Sarvam Pragya",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sarvam Pragya (generated for the game)"
  },
  {
    "id": 413,
    "name": "Mosaic 3.6",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Mosaic 3.6 (generated for the game)"
  },
  {
    "id": 414,
    "name": "Tensor 3.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Tensor 3.5 (generated for the game)"
  },
  {
    "id": 415,
    "name": "Yotta 1.3B Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Yotta 1.3B Instruct (generated for the game)"
  },
  {
    "id": 416,
    "name": "2.5-14B-Instruct-1M",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen2.5-14B-Instruct-1M"
  },
  {
    "id": 417,
    "name": "TranslateGemma 4B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — TranslateGemma 4B"
  },
  {
    "id": 418,
    "name": "Granite-3.0-2B-Base",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-3.0-2B-Base"
  },
  {
    "id": 419,
    "name": "3.9-Plus",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 3.9-Plus (generated for the game)"
  },
  {
    "id": 420,
    "name": "Falcon-H2-4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Falcon-H2-4B (generated for the game)"
  },
  {
    "id": 421,
    "name": "Daybreak Blue",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — Daybreak Blue"
  },
  {
    "id": 422,
    "name": "Aster-2B-A4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Aster-2B-A4B (generated for the game)"
  },
  {
    "id": 423,
    "name": "LFM2.5-230M",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-230M"
  },
  {
    "id": 424,
    "name": "Pro Experimental 2.5",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 2.5 Pro Experimental"
  },
  {
    "id": 425,
    "name": "LFM2.5-DSpark",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-DSpark"
  },
  {
    "id": 426,
    "name": "Seed3.0",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Seed3.0 (generated for the game)"
  },
  {
    "id": 427,
    "name": "Gemma 3 1B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemma 3 1B"
  },
  {
    "id": 428,
    "name": "3.6-35B-A3B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.6-35B-A3B"
  },
  {
    "id": 429,
    "name": "Seed2.1",
    "isReal": true,
    "fullNameWithCompany": "ByteDance Seed — Seed2.1"
  },
  {
    "id": 430,
    "name": "Haiku 4.5",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Haiku 4.5"
  },
  {
    "id": 431,
    "name": "Codestral Embed",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Codestral Embed"
  },
  {
    "id": 432,
    "name": "Ember 5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Ember 5 (generated for the game)"
  },
  {
    "id": 433,
    "name": "Pulse-4.1-Edge-72B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Pulse-4.1-Edge-72B (generated for the game)"
  },
  {
    "id": 434,
    "name": "Yotta-7B-A2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Yotta-7B-A2B (generated for the game)"
  },
  {
    "id": 435,
    "name": "Vertex-12B-A6B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Vertex-12B-A6B (generated for the game)"
  },
  {
    "id": 436,
    "name": "SynLogic-Mix-3-32B",
    "isReal": true,
    "fullNameWithCompany": "MiniMax — SynLogic-Mix-3-32B"
  },
  {
    "id": 437,
    "name": "LFM2-Audio",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2-Audio"
  },
  {
    "id": 438,
    "name": "V3.3-Speciale",
    "isReal": false,
    "fullNameWithCompany": "Fictional — V3.3-Speciale (generated for the game)"
  },
  {
    "id": 439,
    "name": "4.1",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-4.1"
  },
  {
    "id": 440,
    "name": "o3-pro",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — o3-pro"
  },
  {
    "id": 441,
    "name": "Aster 2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Aster 2 (generated for the game)"
  },
  {
    "id": 442,
    "name": "Command A Translate",
    "isReal": true,
    "fullNameWithCompany": "Cohere / Cohere Labs — Command A Translate"
  },
  {
    "id": 443,
    "name": "MiMo-V2.6-Distill-Qwen-9B",
    "isReal": true,
    "fullNameWithCompany": "Xiaomi MiMo — MiMo-V2.6-Distill-Qwen-9B"
  },
  {
    "id": 444,
    "name": "Graphstral 2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Graphstral 2 (generated for the game)"
  },
  {
    "id": 445,
    "name": "Omega Code 2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Omega Code 2 (generated for the game)"
  },
  {
    "id": 446,
    "name": "Magistral Small",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Magistral Small"
  },
  {
    "id": 447,
    "name": "Granite Speech 4.0 4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Granite Speech 4.0 4B (generated for the game)"
  },
  {
    "id": 448,
    "name": "Flash-Lite 3.1",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3.1 Flash-Lite"
  },
  {
    "id": 449,
    "name": "3.6-Agent-72B-A6B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 3.6-Agent-72B-A6B (generated for the game)"
  },
  {
    "id": 450,
    "name": "5.6 Cyber",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5.6 Cyber"
  },
  {
    "id": 451,
    "name": "OLMo 2 7B",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — OLMo 2 7B"
  },
  {
    "id": 452,
    "name": "LFM2.5-Encoder-350M",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-Encoder-350M"
  },
  {
    "id": 453,
    "name": "3-Next-80B-A3B-Instruct",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3-Next-80B-A3B-Instruct"
  },
  {
    "id": 454,
    "name": "Atlas 5.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Atlas 5.1 (generated for the game)"
  },
  {
    "id": 455,
    "name": "3.5-Plus",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.5-Plus"
  },
  {
    "id": 456,
    "name": "SynLogic-7B",
    "isReal": true,
    "fullNameWithCompany": "MiniMax — SynLogic-7B"
  },
  {
    "id": 457,
    "name": "3.5-4B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.5-4B"
  },
  {
    "id": 458,
    "name": "Granite-3.0-8B-Base",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-3.0-8B-Base"
  },
  {
    "id": 459,
    "name": "Granite-4.1-H-Tiny",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Granite-4.1-H-Tiny (generated for the game)"
  },
  {
    "id": 460,
    "name": "Voxtral Mini Transcribe",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Voxtral Mini Transcribe"
  },
  {
    "id": 461,
    "name": "LFM-1B-Math",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM-1B-Math"
  },
  {
    "id": 462,
    "name": "Umbra-3.2-Think-0.8B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Umbra-3.2-Think-0.8B (generated for the game)"
  },
  {
    "id": 463,
    "name": "Sonnet 4.8",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sonnet 4.8 (generated for the game)"
  },
  {
    "id": 464,
    "name": "Kimi-VL-A4B-Reasoning",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kimi-VL-A4B-Reasoning (generated for the game)"
  },
  {
    "id": 465,
    "name": "Codestral 2501",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Codestral 2501"
  },
  {
    "id": 466,
    "name": "Zephyr 24B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Zephyr 24B Preview (generated for the game)"
  },
  {
    "id": 467,
    "name": "LFM2-ColBERT-350M",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2-ColBERT-350M"
  },
  {
    "id": 468,
    "name": "Seed2.0",
    "isReal": true,
    "fullNameWithCompany": "ByteDance Seed — Seed2.0"
  },
  {
    "id": 469,
    "name": "LFM3-1.4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — LFM3-1.4B (generated for the game)"
  },
  {
    "id": 470,
    "name": "5.5",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5.5"
  },
  {
    "id": 471,
    "name": "Magistral Large",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Magistral Large (generated for the game)"
  },
  {
    "id": 472,
    "name": "LFM2-VL",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2-VL"
  },
  {
    "id": 473,
    "name": "Quartz 0.8B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Quartz 0.8B Preview (generated for the game)"
  },
  {
    "id": 474,
    "name": "MiMo-Audio-7B-Instruct",
    "isReal": true,
    "fullNameWithCompany": "Xiaomi MiMo — MiMo-Audio-7B-Instruct"
  },
  {
    "id": 475,
    "name": "Quartz 12B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Quartz 12B Preview (generated for the game)"
  },
  {
    "id": 476,
    "name": "Yotta Edge 3",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Yotta Edge 3 (generated for the game)"
  },
  {
    "id": 477,
    "name": "V4-Pro",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-V4-Pro"
  },
  {
    "id": 478,
    "name": "Falcon-E-3B-Base",
    "isReal": true,
    "fullNameWithCompany": "Technology Innovation Institute (TII) — Falcon-E-3B-Base"
  },
  {
    "id": 479,
    "name": "Wave Think 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Wave Think 4.2 (generated for the game)"
  },
  {
    "id": 480,
    "name": "Falcon-H1-3B",
    "isReal": true,
    "fullNameWithCompany": "Technology Innovation Institute (TII) — Falcon-H1-3B"
  },
  {
    "id": 481,
    "name": "Devstral 2",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Devstral 2"
  },
  {
    "id": 482,
    "name": "Falcon-H1-0.5B",
    "isReal": true,
    "fullNameWithCompany": "Technology Innovation Institute (TII) — Falcon-H1-0.5B"
  },
  {
    "id": 483,
    "name": "Glyph 5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Glyph 5 (generated for the game)"
  },
  {
    "id": 484,
    "name": "Ion-3-Think-24B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Ion-3-Think-24B (generated for the game)"
  },
  {
    "id": 485,
    "name": "AgentWorld-48B-A4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — AgentWorld-48B-A4B (generated for the game)"
  },
  {
    "id": 486,
    "name": "Phi-4-mini-flash-reasoning",
    "isReal": true,
    "fullNameWithCompany": "Microsoft — Phi-4-mini-flash-reasoning"
  },
  {
    "id": 487,
    "name": "Aster 3.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Aster 3.5 (generated for the game)"
  },
  {
    "id": 488,
    "name": "Relay 2.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Relay 2.5 (generated for the game)"
  },
  {
    "id": 489,
    "name": "PaliGemma 2 3B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — PaliGemma 2 3B"
  },
  {
    "id": 490,
    "name": "5.6 Luna",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5.6 Luna"
  },
  {
    "id": 491,
    "name": "Kernel Pro 3.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kernel Pro 3.2 (generated for the game)"
  },
  {
    "id": 492,
    "name": "Ember-3.2-Code-7B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Ember-3.2-Code-7B (generated for the game)"
  },
  {
    "id": 493,
    "name": "3.5-122B-A10B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.5-122B-A10B"
  },
  {
    "id": 494,
    "name": "Sarvam Vaani",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sarvam Vaani (generated for the game)"
  },
  {
    "id": 495,
    "name": "FunctionGemma 270M",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — FunctionGemma 270M"
  },
  {
    "id": 496,
    "name": "Extended Thinking 4.0",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Extended Thinking 4.0 (generated for the game)"
  },
  {
    "id": 497,
    "name": "TranslateGemma 27B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — TranslateGemma 27B"
  },
  {
    "id": 498,
    "name": "Delta 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Delta 4.2 (generated for the game)"
  },
  {
    "id": 499,
    "name": "Boreal-0.8B-A2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Boreal-0.8B-A2B (generated for the game)"
  },
  {
    "id": 500,
    "name": "DiffusionGemma",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — DiffusionGemma"
  },
  {
    "id": 501,
    "name": "VaultGemma 1B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — VaultGemma 1B"
  },
  {
    "id": 502,
    "name": "T5Gemma 3 320M-320M",
    "isReal": false,
    "fullNameWithCompany": "Fictional — T5Gemma 3 320M-320M (generated for the game)"
  },
  {
    "id": 503,
    "name": "2.5-Coder-32B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen2.5-Coder-32B"
  },
  {
    "id": 504,
    "name": "Codestral 25.08",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Codestral 25.08"
  },
  {
    "id": 505,
    "name": "LFM2.5-1.2B",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-1.2B"
  },
  {
    "id": 506,
    "name": "Nemotron-Edge-7B-V2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nemotron-Edge-7B-V2 (generated for the game)"
  },
  {
    "id": 507,
    "name": "3.5-2B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.5-2B"
  },
  {
    "id": 508,
    "name": "Yotta Code 2.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Yotta Code 2.5 (generated for the game)"
  },
  {
    "id": 509,
    "name": "Grok 4.5",
    "isReal": true,
    "fullNameWithCompany": "xAI — Grok 4.5"
  },
  {
    "id": 510,
    "name": "Gemma 4 26B-A4B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemma 4 26B-A4B"
  },
  {
    "id": 511,
    "name": "Delta-4-VL-72B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Delta-4-VL-72B (generated for the game)"
  },
  {
    "id": 512,
    "name": "LogicGemma 7B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — LogicGemma 7B (generated for the game)"
  },
  {
    "id": 513,
    "name": "Kernel-0.8B-A6B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kernel-0.8B-A6B (generated for the game)"
  },
  {
    "id": 514,
    "name": "Granite-4.0-Micro",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-4.0-Micro"
  },
  {
    "id": 515,
    "name": "Nova Pro",
    "isReal": true,
    "fullNameWithCompany": "Amazon — Amazon Nova Pro"
  },
  {
    "id": 516,
    "name": "Kernel 24B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kernel 24B Preview (generated for the game)"
  },
  {
    "id": 517,
    "name": "MiniMax-M1-120k",
    "isReal": false,
    "fullNameWithCompany": "Fictional — MiniMax-M1-120k (generated for the game)"
  },
  {
    "id": 518,
    "name": "Falcon-E-3B-Instruct",
    "isReal": true,
    "fullNameWithCompany": "Technology Innovation Institute (TII) — Falcon-E-3B-Instruct"
  },
  {
    "id": 519,
    "name": "Pulse-5-Code-3B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Pulse-5-Code-3B (generated for the game)"
  },
  {
    "id": 520,
    "name": "grok-4-fast-reasoning",
    "isReal": true,
    "fullNameWithCompany": "xAI — grok-4-fast-reasoning"
  },
  {
    "id": 521,
    "name": "Kimi-K3",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Kimi-K3"
  },
  {
    "id": 522,
    "name": "Aya Orbit 8B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Aya Orbit 8B (generated for the game)"
  },
  {
    "id": 523,
    "name": "Yotta 3B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Yotta 3B Preview (generated for the game)"
  },
  {
    "id": 524,
    "name": "LFM2.5-VL-450M",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-VL-450M"
  },
  {
    "id": 525,
    "name": "grok-4-1-fast-non-reasoning",
    "isReal": true,
    "fullNameWithCompany": "xAI — grok-4-1-fast-non-reasoning"
  },
  {
    "id": 526,
    "name": "Voxtral Realtime",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Voxtral Realtime"
  },
  {
    "id": 527,
    "name": "Small Creative",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Mistral Small Creative"
  },
  {
    "id": 528,
    "name": "BitNet b1.42 3B6T",
    "isReal": false,
    "fullNameWithCompany": "Fictional — BitNet b1.42 3B6T (generated for the game)"
  },
  {
    "id": 529,
    "name": "GLM-4.7-Flash",
    "isReal": true,
    "fullNameWithCompany": "Z.ai — GLM-4.7-Flash"
  },
  {
    "id": 530,
    "name": "Flux-24B-A3B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Flux-24B-A3B (generated for the game)"
  },
  {
    "id": 531,
    "name": "Opus 4",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Opus 4"
  },
  {
    "id": 532,
    "name": "Jade-4.2-Live-2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Jade-4.2-Live-2B (generated for the game)"
  },
  {
    "id": 533,
    "name": "Phi-4-reasoning",
    "isReal": true,
    "fullNameWithCompany": "Microsoft — Phi-4-reasoning"
  },
  {
    "id": 534,
    "name": "Quartz 1.3B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Quartz 1.3B Preview (generated for the game)"
  },
  {
    "id": 535,
    "name": "Molmo 2 8B",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — Molmo 2 8B"
  },
  {
    "id": 536,
    "name": "Falcon-H1-1.5B-Deep",
    "isReal": true,
    "fullNameWithCompany": "Technology Innovation Institute (TII) — Falcon-H1-1.5B-Deep"
  },
  {
    "id": 537,
    "name": "MiniMax-M3.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — MiniMax-M3.1 (generated for the game)"
  },
  {
    "id": 538,
    "name": "Vertex 3B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Vertex 3B Preview (generated for the game)"
  },
  {
    "id": 539,
    "name": "Nova 2 Sonic",
    "isReal": true,
    "fullNameWithCompany": "Amazon — Amazon Nova 2 Sonic"
  },
  {
    "id": 540,
    "name": "NovaCore 0.8B Base",
    "isReal": false,
    "fullNameWithCompany": "Fictional — NovaCore 0.8B Base (generated for the game)"
  },
  {
    "id": 541,
    "name": "R2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — R2 (generated for the game)"
  },
  {
    "id": 542,
    "name": "Live Extended Thinking 3.8",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3.8 Live Extended Thinking"
  },
  {
    "id": 543,
    "name": "Granite 3.3 8B Base",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite 3.3 8B Base"
  },
  {
    "id": 544,
    "name": "Cipher-2-Reason-72B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Cipher-2-Reason-72B (generated for the game)"
  },
  {
    "id": 545,
    "name": "Nemotron 3 Super",
    "isReal": true,
    "fullNameWithCompany": "NVIDIA — Nemotron 3 Super"
  },
  {
    "id": 546,
    "name": "Opus 4.7",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Opus 4.7"
  },
  {
    "id": 547,
    "name": "Olmo-2-0425-1B-SFT",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — Olmo-2-0425-1B-SFT"
  },
  {
    "id": 548,
    "name": "Nova 2 Act",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nova 2 Act (generated for the game)"
  },
  {
    "id": 549,
    "name": "PaliGemma 3 6B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — PaliGemma 3 6B (generated for the game)"
  },
  {
    "id": 550,
    "name": "T5Gemma 2 1B-1B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — T5Gemma 2 1B-1B"
  },
  {
    "id": 551,
    "name": "Meridian 3.4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Meridian 3.4 (generated for the game)"
  },
  {
    "id": 552,
    "name": "Falcon-H1-34B",
    "isReal": true,
    "fullNameWithCompany": "Technology Innovation Institute (TII) — Falcon-H1-34B"
  },
  {
    "id": 553,
    "name": "MiMo-V2.7",
    "isReal": false,
    "fullNameWithCompany": "Fictional — MiMo-V2.7 (generated for the game)"
  },
  {
    "id": 554,
    "name": "Myna V2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Myna V2 (generated for the game)"
  },
  {
    "id": 555,
    "name": "MiniMax-M3-VL",
    "isReal": false,
    "fullNameWithCompany": "Fictional — MiniMax-M3-VL (generated for the game)"
  },
  {
    "id": 556,
    "name": "Sarvam 60B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sarvam 60B (generated for the game)"
  },
  {
    "id": 557,
    "name": "V4.2-Flash",
    "isReal": false,
    "fullNameWithCompany": "Fictional — V4.2-Flash (generated for the game)"
  },
  {
    "id": 558,
    "name": "Vertex-3.5-Nano-32B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Vertex-3.5-Nano-32B (generated for the game)"
  },
  {
    "id": 559,
    "name": "Robostral Pilot",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Robostral Pilot (generated for the game)"
  },
  {
    "id": 560,
    "name": "Pro TTS 2.5",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 2.5 Pro TTS"
  },
  {
    "id": 561,
    "name": "R1-Zero",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-R1-Zero"
  },
  {
    "id": 562,
    "name": "Neon 3.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Neon 3.5 (generated for the game)"
  },
  {
    "id": 563,
    "name": "V3",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-V3"
  },
  {
    "id": 564,
    "name": "Kernel 72B Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kernel 72B Instruct (generated for the game)"
  },
  {
    "id": 565,
    "name": "Sigma-2-Flash-2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sigma-2-Flash-2B (generated for the game)"
  },
  {
    "id": 566,
    "name": "V4.2-Flash-Vision-Lite",
    "isReal": false,
    "fullNameWithCompany": "Fictional — V4.2-Flash-Vision-Lite (generated for the game)"
  },
  {
    "id": 567,
    "name": "Halo 2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Halo 2 (generated for the game)"
  },
  {
    "id": 568,
    "name": "TranslateGemma 12B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — TranslateGemma 12B"
  },
  {
    "id": 569,
    "name": "MiMo-7B-RL-0530",
    "isReal": true,
    "fullNameWithCompany": "Xiaomi MiMo — MiMo-7B-RL-0530"
  },
  {
    "id": 570,
    "name": "LFM2.5-VL-1.6B",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-VL-1.6B"
  },
  {
    "id": 571,
    "name": "Halo 2B Base",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Halo 2B Base (generated for the game)"
  },
  {
    "id": 572,
    "name": "PaliGemma 2 10B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — PaliGemma 2 10B"
  },
  {
    "id": 573,
    "name": "6.2 Sol",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 6.2 Sol (generated for the game)"
  },
  {
    "id": 574,
    "name": "OlmoEarth-v1-Tiny",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — OlmoEarth-v1-Tiny"
  },
  {
    "id": 575,
    "name": "Zephyr-3B-A4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Zephyr-3B-A4B (generated for the game)"
  },
  {
    "id": 576,
    "name": "Xenon 4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Xenon 4 (generated for the game)"
  },
  {
    "id": 577,
    "name": "3.6-27B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.6-27B"
  },
  {
    "id": 578,
    "name": "V4.1-Pro",
    "isReal": false,
    "fullNameWithCompany": "Fictional — V4.1-Pro (generated for the game)"
  },
  {
    "id": 579,
    "name": "Kernel 12B Base",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kernel 12B Base (generated for the game)"
  },
  {
    "id": 580,
    "name": "Transcribe 4.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Transcribe 4.1 (generated for the game)"
  },
  {
    "id": 581,
    "name": "o4-mini-high",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — o4-mini-high"
  },
  {
    "id": 582,
    "name": "Grok 3 (Think)",
    "isReal": true,
    "fullNameWithCompany": "xAI — Grok 3 (Think)"
  },
  {
    "id": 583,
    "name": "Glyph-2B-A2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Glyph-2B-A2B (generated for the game)"
  },
  {
    "id": 584,
    "name": "Phi-4",
    "isReal": true,
    "fullNameWithCompany": "Microsoft — Phi-4"
  },
  {
    "id": 585,
    "name": "Granite-Guardian-4.0-3B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Granite-Guardian-4.0-3B (generated for the game)"
  },
  {
    "id": 586,
    "name": "Nova Premier",
    "isReal": true,
    "fullNameWithCompany": "Amazon — Amazon Nova Premier"
  },
  {
    "id": 587,
    "name": "R1-Distill-Qwen-32B",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-R1-Distill-Qwen-32B"
  },
  {
    "id": 588,
    "name": "Leanstral Code",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Leanstral Code (generated for the game)"
  },
  {
    "id": 589,
    "name": "2.5-Coder-3B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen2.5-Coder-3B"
  },
  {
    "id": 590,
    "name": "Rerank 5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Rerank 5 (generated for the game)"
  },
  {
    "id": 591,
    "name": "Command A Vision",
    "isReal": true,
    "fullNameWithCompany": "Cohere / Cohere Labs — Command A Vision"
  },
  {
    "id": 592,
    "name": "Ember 32B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Ember 32B Preview (generated for the game)"
  },
  {
    "id": 593,
    "name": "Vesper 5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Vesper 5 (generated for the game)"
  },
  {
    "id": 594,
    "name": "Fable 5.1",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Fable 5.1"
  },
  {
    "id": 595,
    "name": "Delta Think 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Delta Think 4.2 (generated for the game)"
  },
  {
    "id": 596,
    "name": "Live 3.8",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3.8 Live"
  },
  {
    "id": 597,
    "name": "Glyph-5-Reason-72B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Glyph-5-Reason-72B (generated for the game)"
  },
  {
    "id": 598,
    "name": "Nova Nano",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nova Nano (generated for the game)"
  },
  {
    "id": 599,
    "name": "SynLogic-Mix-4-48B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — SynLogic-Mix-4-48B (generated for the game)"
  },
  {
    "id": 600,
    "name": "Nova Lite",
    "isReal": true,
    "fullNameWithCompany": "Amazon — Amazon Nova Lite"
  },
  {
    "id": 601,
    "name": "M2",
    "isReal": true,
    "fullNameWithCompany": "MiniMax — MiniMax-M2"
  },
  {
    "id": 602,
    "name": "Mythos 5.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Mythos 5.2 (generated for the game)"
  },
  {
    "id": 603,
    "name": "V4-Flash",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-V4-Flash"
  },
  {
    "id": 604,
    "name": "Shieldstral",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Shieldstral"
  },
  {
    "id": 605,
    "name": "Yotta Reason 2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Yotta Reason 2 (generated for the game)"
  },
  {
    "id": 606,
    "name": "grok-4-fast-non-reasoning",
    "isReal": true,
    "fullNameWithCompany": "xAI — grok-4-fast-non-reasoning"
  },
  {
    "id": 607,
    "name": "Transcribe 3.5",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3.5 Transcribe"
  },
  {
    "id": 608,
    "name": "Jade 2B Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Jade 2B Instruct (generated for the game)"
  },
  {
    "id": 609,
    "name": "Seed2.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Seed2.5 (generated for the game)"
  },
  {
    "id": 610,
    "name": "Granite-4.0-1B",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-4.0-1B"
  },
  {
    "id": 611,
    "name": "SynLogic-32B",
    "isReal": true,
    "fullNameWithCompany": "MiniMax — SynLogic-32B"
  },
  {
    "id": 612,
    "name": "Gemma 3 4B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemma 3 4B"
  },
  {
    "id": 613,
    "name": "Pulse Live 3.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Pulse Live 3.2 (generated for the game)"
  },
  {
    "id": 614,
    "name": "Cipher Think 2.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Cipher Think 2.5 (generated for the game)"
  },
  {
    "id": 615,
    "name": "Aster 3.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Aster 3.2 (generated for the game)"
  },
  {
    "id": 616,
    "name": "o3-mini",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — o3-mini"
  },
  {
    "id": 617,
    "name": "R1-Distill-Qwen-14B",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-R1-Distill-Qwen-14B"
  },
  {
    "id": 618,
    "name": "Cohere Transcribe",
    "isReal": true,
    "fullNameWithCompany": "Cohere / Cohere Labs — Cohere Transcribe"
  },
  {
    "id": 619,
    "name": "T5Gemma 2 4B-4B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — T5Gemma 2 4B-4B"
  },
  {
    "id": 620,
    "name": "o6-pro",
    "isReal": false,
    "fullNameWithCompany": "Fictional — o6-pro (generated for the game)"
  },
  {
    "id": 621,
    "name": "Cognistral Small",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Cognistral Small (generated for the game)"
  },
  {
    "id": 622,
    "name": "Seed2.1-VL",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Seed2.1-VL (generated for the game)"
  },
  {
    "id": 623,
    "name": "3.6-Coder-96B-A8B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 3.6-Coder-96B-A8B (generated for the game)"
  },
  {
    "id": 624,
    "name": "MiMo-V2.6-Distill-Qwen-14B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — MiMo-V2.6-Distill-Qwen-14B (generated for the game)"
  },
  {
    "id": 625,
    "name": "3-1.7B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3-1.7B"
  },
  {
    "id": 626,
    "name": "Granite 4.1 3B",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite 4.1 3B"
  },
  {
    "id": 627,
    "name": "Halo 3B Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Halo 3B Instruct (generated for the game)"
  },
  {
    "id": 628,
    "name": "Granite 3.1 2B",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite 3.1 2B"
  },
  {
    "id": 629,
    "name": "PulseGemma 2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — PulseGemma 2B (generated for the game)"
  },
  {
    "id": 630,
    "name": "3.8-Omni-Flash",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.8-Omni-Flash"
  },
  {
    "id": 631,
    "name": "NovaCore 32B Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — NovaCore 32B Instruct (generated for the game)"
  },
  {
    "id": 632,
    "name": "Kimi-Audio-7B",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Kimi-Audio-7B"
  },
  {
    "id": 633,
    "name": "Mistral Small 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Mistral Small 4.2 (generated for the game)"
  },
  {
    "id": 634,
    "name": "o3.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — o3.5 (generated for the game)"
  },
  {
    "id": 635,
    "name": "Nova 2 Canvas",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nova 2 Canvas (generated for the game)"
  },
  {
    "id": 636,
    "name": "Aster Reason 4.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Aster Reason 4.1 (generated for the game)"
  },
  {
    "id": 637,
    "name": "MiMo-7B-Base",
    "isReal": true,
    "fullNameWithCompany": "Xiaomi MiMo — MiMo-7B-Base"
  },
  {
    "id": 638,
    "name": "Omega-12B-A2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Omega-12B-A2B (generated for the game)"
  },
  {
    "id": 639,
    "name": "Bulbul V4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Bulbul V4 (generated for the game)"
  },
  {
    "id": 640,
    "name": "Nemotron-4-Micro-26B-A4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nemotron-4-Micro-26B-A4B (generated for the game)"
  },
  {
    "id": 641,
    "name": "Command B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Command B (generated for the game)"
  },
  {
    "id": 642,
    "name": "Nova 3 Sonic",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nova 3 Sonic (generated for the game)"
  },
  {
    "id": 643,
    "name": "Granite-4.0-H-1B",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-4.0-H-1B"
  },
  {
    "id": 644,
    "name": "Sigma-3-Pro-12B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sigma-3-Pro-12B (generated for the game)"
  },
  {
    "id": 645,
    "name": "r1-mini",
    "isReal": false,
    "fullNameWithCompany": "Fictional — r1-mini (generated for the game)"
  },
  {
    "id": 646,
    "name": "AgentWorld-35B-A3B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen-AgentWorld-35B-A3B"
  },
  {
    "id": 647,
    "name": "LFM-7B",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM-7B"
  },
  {
    "id": 648,
    "name": "LFM2.5-Reason-1.2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — LFM2.5-Reason-1.2B (generated for the game)"
  },
  {
    "id": 649,
    "name": "Flash 3.7",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3.7 Flash"
  },
  {
    "id": 650,
    "name": "LFM2.5-1.2B-Thinking",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-1.2B-Thinking"
  },
  {
    "id": 651,
    "name": "3.8-Next-120B-A10B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 3.8-Next-120B-A10B (generated for the game)"
  },
  {
    "id": 652,
    "name": "5.6 Sol",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5.6 Sol"
  },
  {
    "id": 653,
    "name": "T5Gemma 2 270M-270M",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — T5Gemma 2 270M-270M"
  },
  {
    "id": 654,
    "name": "QwQ-32B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — QwQ-32B"
  },
  {
    "id": 655,
    "name": "Opus 5.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Opus 5.2 (generated for the game)"
  },
  {
    "id": 656,
    "name": "o4-mini",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — o4-mini"
  },
  {
    "id": 657,
    "name": "Agentstral Medium",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Agentstral Medium (generated for the game)"
  },
  {
    "id": 658,
    "name": "Seed Diffusion Preview",
    "isReal": true,
    "fullNameWithCompany": "ByteDance Seed — Seed Diffusion Preview"
  },
  {
    "id": 659,
    "name": "Text-01",
    "isReal": true,
    "fullNameWithCompany": "MiniMax — MiniMax-Text-01"
  },
  {
    "id": 660,
    "name": "OlmoEarth-v2-Micro",
    "isReal": false,
    "fullNameWithCompany": "Fictional — OlmoEarth-v2-Micro (generated for the game)"
  },
  {
    "id": 661,
    "name": "North Small Code",
    "isReal": false,
    "fullNameWithCompany": "Fictional — North Small Code (generated for the game)"
  },
  {
    "id": 662,
    "name": "Nova Micro",
    "isReal": true,
    "fullNameWithCompany": "Amazon — Amazon Nova Micro"
  },
  {
    "id": 663,
    "name": "Omega Nano 2.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Omega Nano 2.5 (generated for the game)"
  },
  {
    "id": 664,
    "name": "GLM-5-Air",
    "isReal": false,
    "fullNameWithCompany": "Fictional — GLM-5-Air (generated for the game)"
  },
  {
    "id": 665,
    "name": "Ember-1.3B-A3B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Ember-1.3B-A3B (generated for the game)"
  },
  {
    "id": 666,
    "name": "Devstral Nano 1.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Devstral Nano 1.2 (generated for the game)"
  },
  {
    "id": 667,
    "name": "Halo 5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Halo 5 (generated for the game)"
  },
  {
    "id": 668,
    "name": "Kimi-Linear-48B-A3B-Instruct",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Kimi-Linear-48B-A3B-Instruct"
  },
  {
    "id": 669,
    "name": "Flux-24B-A8B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Flux-24B-A8B (generated for the game)"
  },
  {
    "id": 670,
    "name": "Jade 3.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Jade 3.2 (generated for the game)"
  },
  {
    "id": 671,
    "name": "Nemotron 4 Super",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nemotron 4 Super (generated for the game)"
  },
  {
    "id": 672,
    "name": "Kimi-K2.6",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Kimi-K2.6"
  },
  {
    "id": 673,
    "name": "Lumen 5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Lumen 5 (generated for the game)"
  },
  {
    "id": 674,
    "name": "Gemma 2 JPN 2B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemma 2 JPN 2B"
  },
  {
    "id": 675,
    "name": "MedGemma 1.5 4B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — MedGemma 1.5 4B"
  },
  {
    "id": 676,
    "name": "Aya Expanse 8B",
    "isReal": true,
    "fullNameWithCompany": "Cohere / Cohere Labs — Aya Expanse 8B"
  },
  {
    "id": 677,
    "name": "Nacre 4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nacre 4 (generated for the game)"
  },
  {
    "id": 678,
    "name": "V3.2",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-V3.2"
  },
  {
    "id": 679,
    "name": "Falcon3 3B",
    "isReal": true,
    "fullNameWithCompany": "Technology Innovation Institute (TII) — Falcon3 3B"
  },
  {
    "id": 680,
    "name": "Tensor Pro 2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Tensor Pro 2 (generated for the game)"
  },
  {
    "id": 681,
    "name": "Transcribe Live 3.5",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3.5 Transcribe Live"
  },
  {
    "id": 682,
    "name": "2.5-Turbo",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen2.5-Turbo"
  },
  {
    "id": 683,
    "name": "Command A Reasoning",
    "isReal": true,
    "fullNameWithCompany": "Cohere / Cohere Labs — Command A Reasoning"
  },
  {
    "id": 684,
    "name": "Matrix 0.8B Reasoning",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Matrix 0.8B Reasoning (generated for the game)"
  },
  {
    "id": 685,
    "name": "Flash 4.0",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Flash 4.0 (generated for the game)"
  },
  {
    "id": 686,
    "name": "Cobalt 4.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Cobalt 4.1 (generated for the game)"
  },
  {
    "id": 687,
    "name": "MiniMax-M2.8",
    "isReal": false,
    "fullNameWithCompany": "Fictional — MiniMax-M2.8 (generated for the game)"
  },
  {
    "id": 688,
    "name": "LFM2.5-VL-3B",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-VL-3B"
  },
  {
    "id": 689,
    "name": "Flash-Lite 4.0",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Flash-Lite 4.0 (generated for the game)"
  },
  {
    "id": 690,
    "name": "Vertex 24B Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Vertex 24B Instruct (generated for the game)"
  },
  {
    "id": 691,
    "name": "Sonnet 5",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Sonnet 5"
  },
  {
    "id": 692,
    "name": "LFM2.5-1.2B-JP",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-1.2B-JP"
  },
  {
    "id": 693,
    "name": "Kimi-Dev-110B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kimi-Dev-110B (generated for the game)"
  },
  {
    "id": 694,
    "name": "CodeStral Nano",
    "isReal": false,
    "fullNameWithCompany": "Fictional — CodeStral Nano (generated for the game)"
  },
  {
    "id": 695,
    "name": "Kepler 4.6",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kepler 4.6 (generated for the game)"
  },
  {
    "id": 696,
    "name": "Delta-48B-A2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Delta-48B-A2B (generated for the game)"
  },
  {
    "id": 697,
    "name": "EmbeddingGemma 308M",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — EmbeddingGemma 308M"
  },
  {
    "id": 698,
    "name": "OLMo-2-1124-13B-Instruct",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — OLMo-2-1124-13B-Instruct"
  },
  {
    "id": 699,
    "name": "Omega 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Omega 4.2 (generated for the game)"
  },
  {
    "id": 700,
    "name": "V3.2-Exp",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-V3.2-Exp"
  },
  {
    "id": 701,
    "name": "Command R9B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Command R9B (generated for the game)"
  },
  {
    "id": 702,
    "name": "QVQ-48B-Reason",
    "isReal": false,
    "fullNameWithCompany": "Fictional — QVQ-48B-Reason (generated for the game)"
  },
  {
    "id": 703,
    "name": "3-8B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3-8B"
  },
  {
    "id": 704,
    "name": "3.8-Max",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.8-Max"
  },
  {
    "id": 705,
    "name": "MiMo-V2.6-Pro-RL",
    "isReal": true,
    "fullNameWithCompany": "Xiaomi MiMo — MiMo-V2.6-Pro-RL"
  },
  {
    "id": 706,
    "name": "Lumen VL 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Lumen VL 4.2 (generated for the game)"
  },
  {
    "id": 707,
    "name": "Yotta 4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Yotta 4 (generated for the game)"
  },
  {
    "id": 708,
    "name": "Phi-5-mini-instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Phi-5-mini-instruct (generated for the game)"
  },
  {
    "id": 709,
    "name": "Phi-4-mini-instruct",
    "isReal": true,
    "fullNameWithCompany": "Microsoft — Phi-4-mini-instruct"
  },
  {
    "id": 710,
    "name": "Live 3.4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Live 3.4 (generated for the game)"
  },
  {
    "id": 711,
    "name": "Glyph Flash 4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Glyph Flash 4 (generated for the game)"
  },
  {
    "id": 712,
    "name": "Falcon-H2-1.8B-Deep",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Falcon-H2-1.8B-Deep (generated for the game)"
  },
  {
    "id": 713,
    "name": "North Nano Code",
    "isReal": false,
    "fullNameWithCompany": "Fictional — North Nano Code (generated for the game)"
  },
  {
    "id": 714,
    "name": "MiMo-V3-ASR",
    "isReal": false,
    "fullNameWithCompany": "Fictional — MiMo-V3-ASR (generated for the game)"
  },
  {
    "id": 715,
    "name": "Flash-Lite 2.0",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 2.0 Flash-Lite"
  },
  {
    "id": 716,
    "name": "Granite Speech 3.3 8B",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite Speech 3.3 8B"
  },
  {
    "id": 717,
    "name": "Nova Sonic",
    "isReal": true,
    "fullNameWithCompany": "Amazon — Amazon Nova Sonic"
  },
  {
    "id": 718,
    "name": "Saaras V3",
    "isReal": true,
    "fullNameWithCompany": "Sarvam AI — Saaras V3"
  },
  {
    "id": 719,
    "name": "Kimi-K3-Base",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kimi-K3-Base (generated for the game)"
  },
  {
    "id": 720,
    "name": "R2-Distill-Llama-16B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — R2-Distill-Llama-16B (generated for the game)"
  },
  {
    "id": 721,
    "name": "Kimi-VL-A3B-Instruct",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Kimi-VL-A3B-Instruct"
  },
  {
    "id": 722,
    "name": "Vertex-2B-A2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Vertex-2B-A2B (generated for the game)"
  },
  {
    "id": 723,
    "name": "MiMo-V2.5-ASR",
    "isReal": true,
    "fullNameWithCompany": "Xiaomi MiMo — MiMo-V2.5-ASR"
  },
  {
    "id": 724,
    "name": "BitNet b1.58 2B4T",
    "isReal": true,
    "fullNameWithCompany": "Microsoft — BitNet b1.58 2B4T"
  },
  {
    "id": 725,
    "name": "Gemma-APS 7B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemma-APS 7B"
  },
  {
    "id": 726,
    "name": "Molmo 2-O 7B",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — Molmo 2-O 7B"
  },
  {
    "id": 727,
    "name": "GLM-4.6V-Flash",
    "isReal": true,
    "fullNameWithCompany": "Z.ai — GLM-4.6V-Flash"
  },
  {
    "id": 728,
    "name": "OlmoEarth-v1-Large",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — OlmoEarth-v1-Large"
  },
  {
    "id": 729,
    "name": "SynLogic-14B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — SynLogic-14B (generated for the game)"
  },
  {
    "id": 730,
    "name": "Command A Mini",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Command A Mini (generated for the game)"
  },
  {
    "id": 731,
    "name": "LFM2.5-Vector-350M",
    "isReal": false,
    "fullNameWithCompany": "Fictional — LFM2.5-Vector-350M (generated for the game)"
  },
  {
    "id": 732,
    "name": "R1-Distill-Llama-70B",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-R1-Distill-Llama-70B"
  },
  {
    "id": 733,
    "name": "OLMo 2 13B",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — OLMo 2 13B"
  },
  {
    "id": 734,
    "name": "QwQ-Max-Preview",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — QwQ-Max-Preview"
  },
  {
    "id": 735,
    "name": "Kimi-VL-A3B-Thinking",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Kimi-VL-A3B-Thinking"
  },
  {
    "id": 736,
    "name": "Opus 4.8",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Opus 4.8"
  },
  {
    "id": 737,
    "name": "3.7-LiveCoder",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 3.7-LiveCoder (generated for the game)"
  },
  {
    "id": 738,
    "name": "LFM2.5-Audio-900M",
    "isReal": false,
    "fullNameWithCompany": "Fictional — LFM2.5-Audio-900M (generated for the game)"
  },
  {
    "id": 739,
    "name": "Cipher 1.3B Base",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Cipher 1.3B Base (generated for the game)"
  },
  {
    "id": 740,
    "name": "LFM2.5-2.6B",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-2.6B"
  },
  {
    "id": 741,
    "name": "Wave-0.8B-A2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Wave-0.8B-A2B (generated for the game)"
  },
  {
    "id": 742,
    "name": "Medium 3.1",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Mistral Medium 3.1"
  },
  {
    "id": 743,
    "name": "Umbra 12B Base",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Umbra 12B Base (generated for the game)"
  },
  {
    "id": 744,
    "name": "LFM2.6-2.8B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — LFM2.6-2.8B (generated for the game)"
  },
  {
    "id": 745,
    "name": "Nemotron-3-Super-120B-A12B",
    "isReal": true,
    "fullNameWithCompany": "NVIDIA — NVIDIA-Nemotron-3-Super-120B-A12B"
  },
  {
    "id": 746,
    "name": "LFM2-8B-A1B",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2-8B-A1B"
  },
  {
    "id": 747,
    "name": "Boreal 48B Base",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Boreal 48B Base (generated for the game)"
  },
  {
    "id": 748,
    "name": "3.8-LiveTranslate",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.8-LiveTranslate"
  },
  {
    "id": 749,
    "name": "Umbra 48B Reasoning",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Umbra 48B Reasoning (generated for the game)"
  },
  {
    "id": 750,
    "name": "Granite-4.0-350M",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-4.0-350M"
  },
  {
    "id": 751,
    "name": "Nemotron-3-Nano-30B-A3B-NVFP4",
    "isReal": true,
    "fullNameWithCompany": "NVIDIA — NVIDIA-Nemotron-3-Nano-30B-A3B-NVFP4"
  },
  {
    "id": 752,
    "name": "Flux-2B-A8B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Flux-2B-A8B (generated for the game)"
  },
  {
    "id": 753,
    "name": "Fresco 4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Fresco 4 (generated for the game)"
  },
  {
    "id": 754,
    "name": "GLM-4.5",
    "isReal": true,
    "fullNameWithCompany": "Z.ai — GLM-4.5"
  },
  {
    "id": 755,
    "name": "Zephyr Think 2.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Zephyr Think 2.5 (generated for the game)"
  },
  {
    "id": 756,
    "name": "3.5-9B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.5-9B"
  },
  {
    "id": 757,
    "name": "6 Astra",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-6 Astra"
  },
  {
    "id": 758,
    "name": "Nemotron Mini 4B Instruct",
    "isReal": true,
    "fullNameWithCompany": "NVIDIA — Nemotron Mini 4B Instruct"
  },
  {
    "id": 759,
    "name": "GLM-6-Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — GLM-6-Preview (generated for the game)"
  },
  {
    "id": 760,
    "name": "Granite-3.0-8B-Instruct-Accelerator",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-3.0-8B-Instruct-Accelerator"
  },
  {
    "id": 761,
    "name": "grok-4.20-0309-reasoning",
    "isReal": true,
    "fullNameWithCompany": "xAI — grok-4.20-0309-reasoning"
  },
  {
    "id": 762,
    "name": "OlmoEarth-v1-Ultra",
    "isReal": false,
    "fullNameWithCompany": "Fictional — OlmoEarth-v1-Ultra (generated for the game)"
  },
  {
    "id": 763,
    "name": "6 Sol",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-6 Sol"
  },
  {
    "id": 764,
    "name": "Gemma 4 42B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Gemma 4 42B (generated for the game)"
  },
  {
    "id": 765,
    "name": "Yotta-4.1-Nano-12B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Yotta-4.1-Nano-12B (generated for the game)"
  },
  {
    "id": 766,
    "name": "oss-safeguard-20b",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — gpt-oss-safeguard-20b"
  },
  {
    "id": 767,
    "name": "LFM2-2.6B",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2-2.6B"
  },
  {
    "id": 768,
    "name": "Prism 4.3",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Prism 4.3 (generated for the game)"
  },
  {
    "id": 769,
    "name": "5.7 Terra",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 5.7 Terra (generated for the game)"
  },
  {
    "id": 770,
    "name": "Command A+",
    "isReal": true,
    "fullNameWithCompany": "Cohere / Cohere Labs — Command A+"
  },
  {
    "id": 771,
    "name": "Jade 72B Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Jade 72B Instruct (generated for the game)"
  },
  {
    "id": 772,
    "name": "Flash 3.8",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3.8 Flash"
  },
  {
    "id": 773,
    "name": "Coder-360B-A28B-Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Coder-360B-A28B-Instruct (generated for the game)"
  },
  {
    "id": 774,
    "name": "Kimi-Linear-64B-A4B-Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kimi-Linear-64B-A4B-Instruct (generated for the game)"
  },
  {
    "id": 775,
    "name": "Cipher-1.3B-A4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Cipher-1.3B-A4B (generated for the game)"
  },
  {
    "id": 776,
    "name": "Llama-3.3-Nemotron-Super-49B-v1.5",
    "isReal": true,
    "fullNameWithCompany": "NVIDIA — Llama-3.3-Nemotron-Super-49B-v1.5"
  },
  {
    "id": 777,
    "name": "5.2",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5.2"
  },
  {
    "id": 778,
    "name": "Robostral Navigate",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Robostral Navigate"
  },
  {
    "id": 779,
    "name": "Vertex 48B Reasoning",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Vertex 48B Reasoning (generated for the game)"
  },
  {
    "id": 780,
    "name": "5 pro",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5 pro"
  },
  {
    "id": 781,
    "name": "Orbit 4.4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Orbit 4.4 (generated for the game)"
  },
  {
    "id": 782,
    "name": "Fable 5",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Fable 5"
  },
  {
    "id": 783,
    "name": "Seed2.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Seed2.2 (generated for the game)"
  },
  {
    "id": 784,
    "name": "Matrix-2.5-Pro-24B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Matrix-2.5-Pro-24B (generated for the game)"
  },
  {
    "id": 785,
    "name": "grok-code-fast-1",
    "isReal": true,
    "fullNameWithCompany": "xAI — grok-code-fast-1"
  },
  {
    "id": 786,
    "name": "Kimi-K2.7-Code",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Kimi-K2.7-Code"
  },
  {
    "id": 787,
    "name": "LFM2.6-900M",
    "isReal": false,
    "fullNameWithCompany": "Fictional — LFM2.6-900M (generated for the game)"
  },
  {
    "id": 788,
    "name": "Granite-4.0-H-Small",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-4.0-H-Small"
  },
  {
    "id": 789,
    "name": "Moonlight-24B-A4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Moonlight-24B-A4B (generated for the game)"
  },
  {
    "id": 790,
    "name": "Sigma-3.2-Flash-7B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sigma-3.2-Flash-7B (generated for the game)"
  },
  {
    "id": 791,
    "name": "Flash 2.0",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 2.0 Flash"
  },
  {
    "id": 792,
    "name": "Phi-4-mini-deep-reasoning",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Phi-4-mini-deep-reasoning (generated for the game)"
  },
  {
    "id": 793,
    "name": "Flash TTS 3.1",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3.1 Flash TTS"
  },
  {
    "id": 794,
    "name": "3.5-397B-A17B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.5-397B-A17B"
  },
  {
    "id": 795,
    "name": "Nova Pulse",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nova Pulse (generated for the game)"
  },
  {
    "id": 796,
    "name": "3.6-Max-Preview",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.6-Max-Preview"
  },
  {
    "id": 797,
    "name": "Ember-7B-A3B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Ember-7B-A3B (generated for the game)"
  },
  {
    "id": 798,
    "name": "Mistral Tiny 4.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Mistral Tiny 4.1 (generated for the game)"
  },
  {
    "id": 799,
    "name": "Granite-3.0-2B-Instruct",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-3.0-2B-Instruct"
  },
  {
    "id": 800,
    "name": "Devstral Small 2",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Devstral Small 2"
  },
  {
    "id": 801,
    "name": "Omega 12B Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Omega 12B Instruct (generated for the game)"
  },
  {
    "id": 802,
    "name": "Parable 5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Parable 5 (generated for the game)"
  },
  {
    "id": 803,
    "name": "Granite-4.2-H-500M",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Granite-4.2-H-500M (generated for the game)"
  },
  {
    "id": 804,
    "name": "Zenith 4.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Zenith 4.1 (generated for the game)"
  },
  {
    "id": 805,
    "name": "Haiku 5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Haiku 5 (generated for the game)"
  },
  {
    "id": 806,
    "name": "6.1 Terra",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 6.1 Terra (generated for the game)"
  },
  {
    "id": 807,
    "name": "Saga 4.6",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Saga 4.6 (generated for the game)"
  },
  {
    "id": 808,
    "name": "Boreal Live 4.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Boreal Live 4.1 (generated for the game)"
  },
  {
    "id": 809,
    "name": "Nemotron 3 Ultra",
    "isReal": true,
    "fullNameWithCompany": "NVIDIA — Nemotron 3 Ultra"
  },
  {
    "id": 810,
    "name": "Falcon3 5B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Falcon3 5B (generated for the game)"
  },
  {
    "id": 811,
    "name": "Phi-5-flash-reasoning",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Phi-5-flash-reasoning (generated for the game)"
  },
  {
    "id": 812,
    "name": "r3",
    "isReal": false,
    "fullNameWithCompany": "Fictional — r3 (generated for the game)"
  },
  {
    "id": 813,
    "name": "Omega-2.5-Nano-12B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Omega-2.5-Nano-12B (generated for the game)"
  },
  {
    "id": 814,
    "name": "Flash 3.4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Flash 3.4 (generated for the game)"
  },
  {
    "id": 815,
    "name": "oss-120b",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — gpt-oss-120b"
  },
  {
    "id": 816,
    "name": "Moonlight-16B-A3B",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Moonlight-16B-A3B"
  },
  {
    "id": 817,
    "name": "Jade Code 5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Jade Code 5 (generated for the game)"
  },
  {
    "id": 818,
    "name": "LFM2.5-500M",
    "isReal": false,
    "fullNameWithCompany": "Fictional — LFM2.5-500M (generated for the game)"
  },
  {
    "id": 819,
    "name": "Falcon-H2-0.7B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Falcon-H2-0.7B (generated for the game)"
  },
  {
    "id": 820,
    "name": "Command R7B",
    "isReal": true,
    "fullNameWithCompany": "Cohere / Cohere Labs — Command R7B"
  },
  {
    "id": 821,
    "name": "oss-safeguard-120b",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — gpt-oss-safeguard-120b"
  },
  {
    "id": 822,
    "name": "Etude 3.9",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Etude 3.9 (generated for the game)"
  },
  {
    "id": 823,
    "name": "Pro Preview 3",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3 Pro Preview"
  },
  {
    "id": 824,
    "name": "QwQ-32B-Preview",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — QwQ-32B-Preview"
  },
  {
    "id": 825,
    "name": "Saba",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Mistral Saba"
  },
  {
    "id": 826,
    "name": "Tensor Live 4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Tensor Live 4 (generated for the game)"
  },
  {
    "id": 827,
    "name": "Arya",
    "isReal": true,
    "fullNameWithCompany": "Sarvam AI — Sarvam Arya"
  },
  {
    "id": 828,
    "name": "Phi-4-reasoning-plus",
    "isReal": true,
    "fullNameWithCompany": "Microsoft — Phi-4-reasoning-plus"
  },
  {
    "id": 829,
    "name": "Axiom 3.7",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Axiom 3.7 (generated for the game)"
  },
  {
    "id": 830,
    "name": "5.4",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5.4"
  },
  {
    "id": 831,
    "name": "Audio",
    "isReal": true,
    "fullNameWithCompany": "Sarvam AI — Sarvam Audio"
  },
  {
    "id": 832,
    "name": "Sonata 4.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sonata 4.5 (generated for the game)"
  },
  {
    "id": 833,
    "name": "o2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — o2 (generated for the game)"
  },
  {
    "id": 834,
    "name": "3.7 Sonnet",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude 3.7 Sonnet"
  },
  {
    "id": 835,
    "name": "OLMo 2 32B",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — OLMo 2 32B"
  },
  {
    "id": 836,
    "name": "GLM-5V-Flash",
    "isReal": false,
    "fullNameWithCompany": "Fictional — GLM-5V-Flash (generated for the game)"
  },
  {
    "id": 837,
    "name": "Granite-4.0-H-Micro",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-4.0-H-Micro"
  },
  {
    "id": 838,
    "name": "Wave 24B Base",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Wave 24B Base (generated for the game)"
  },
  {
    "id": 839,
    "name": "Grok 3",
    "isReal": true,
    "fullNameWithCompany": "xAI — Grok 3"
  },
  {
    "id": 840,
    "name": "Grok 3 mini",
    "isReal": true,
    "fullNameWithCompany": "xAI — Grok 3 mini"
  },
  {
    "id": 841,
    "name": "3.6-Plus",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.6-Plus"
  },
  {
    "id": 842,
    "name": "Matrix 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Matrix 4.2 (generated for the game)"
  },
  {
    "id": 843,
    "name": "Grok 4.6",
    "isReal": true,
    "fullNameWithCompany": "xAI — Grok 4.6"
  },
  {
    "id": 844,
    "name": "Seed2.0-Flash",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Seed2.0-Flash (generated for the game)"
  },
  {
    "id": 845,
    "name": "Jade Mini 3.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Jade Mini 3.5 (generated for the game)"
  },
  {
    "id": 846,
    "name": "MiMo-VL-7B-RL",
    "isReal": true,
    "fullNameWithCompany": "Xiaomi MiMo — MiMo-VL-7B-RL"
  },
  {
    "id": 847,
    "name": "Flux 12B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Flux 12B Preview (generated for the game)"
  },
  {
    "id": 848,
    "name": "Vertex-72B-A8B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Vertex-72B-A8B (generated for the game)"
  },
  {
    "id": 849,
    "name": "Umbra 4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Umbra 4 (generated for the game)"
  },
  {
    "id": 850,
    "name": "Devstral Small 1.1",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Devstral Small 1.1"
  },
  {
    "id": 851,
    "name": "105B",
    "isReal": true,
    "fullNameWithCompany": "Sarvam AI — Sarvam 105B"
  },
  {
    "id": 852,
    "name": "OlmoEarth-v1-Base",
    "isReal": true,
    "fullNameWithCompany": "Allen Institute for AI (AI2) — OlmoEarth-v1-Base"
  },
  {
    "id": 853,
    "name": "Vertex Think 2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Vertex Think 2 (generated for the game)"
  },
  {
    "id": 854,
    "name": "Magistral Medium",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Magistral Medium"
  },
  {
    "id": 855,
    "name": "OCR 4",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Mistral OCR 4"
  },
  {
    "id": 856,
    "name": "Visionstral Small",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Visionstral Small (generated for the game)"
  },
  {
    "id": 857,
    "name": "Ember Pro 3.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Ember Pro 3.5 (generated for the game)"
  },
  {
    "id": 858,
    "name": "Nemotron-Nano-9B-v2",
    "isReal": true,
    "fullNameWithCompany": "NVIDIA — NVIDIA-Nemotron-Nano-9B-v2"
  },
  {
    "id": 859,
    "name": "Live Translate 3.5",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3.5 Live Translate"
  },
  {
    "id": 860,
    "name": "MiniMax-Text-02",
    "isReal": false,
    "fullNameWithCompany": "Fictional — MiniMax-Text-02 (generated for the game)"
  },
  {
    "id": 861,
    "name": "5.4 Pro",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5.4 Pro"
  },
  {
    "id": 862,
    "name": "DolphinGemma",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — DolphinGemma"
  },
  {
    "id": 863,
    "name": "2.5-VL-72B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen2.5-VL-72B"
  },
  {
    "id": 864,
    "name": "V3.2-Speciale",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-V3.2-Speciale"
  },
  {
    "id": 865,
    "name": "Aya Expanse 16B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Aya Expanse 16B (generated for the game)"
  },
  {
    "id": 866,
    "name": "Zephyr-5-Live-48B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Zephyr-5-Live-48B (generated for the game)"
  },
  {
    "id": 867,
    "name": "5.6 Sol Pro",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5.6 Sol Pro"
  },
  {
    "id": 868,
    "name": "Jade-5-VL-3B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Jade-5-VL-3B (generated for the game)"
  },
  {
    "id": 869,
    "name": "Vision 2.1",
    "isReal": true,
    "fullNameWithCompany": "Sarvam AI — Sarvam Vision 2.1"
  },
  {
    "id": 870,
    "name": "5.3-Codex",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5.3-Codex"
  },
  {
    "id": 871,
    "name": "Grok 4.3",
    "isReal": true,
    "fullNameWithCompany": "xAI — Grok 4.3"
  },
  {
    "id": 872,
    "name": "Gemma 3 270M",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemma 3 270M"
  },
  {
    "id": 873,
    "name": "Cantata 5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Cantata 5 (generated for the game)"
  },
  {
    "id": 874,
    "name": "Cipher 72B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Cipher 72B Preview (generated for the game)"
  },
  {
    "id": 875,
    "name": "Vertex Live 3.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Vertex Live 3.5 (generated for the game)"
  },
  {
    "id": 876,
    "name": "5.6 Nova",
    "isReal": false,
    "fullNameWithCompany": "Fictional — 5.6 Nova (generated for the game)"
  },
  {
    "id": 877,
    "name": "3-VL-30B-A3B-Instruct",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3-VL-30B-A3B-Instruct"
  },
  {
    "id": 878,
    "name": "Kimi-Audio-7B-Instruct",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Kimi-Audio-7B-Instruct"
  },
  {
    "id": 879,
    "name": "Gemma 4 31B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemma 4 31B"
  },
  {
    "id": 880,
    "name": "Llama-3.1-Nemotron-Nano-VL-8B-V1",
    "isReal": true,
    "fullNameWithCompany": "NVIDIA — Llama-3.1-Nemotron-Nano-VL-8B-V1"
  },
  {
    "id": 881,
    "name": "Kernel-3-Pro-0.8B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kernel-3-Pro-0.8B (generated for the game)"
  },
  {
    "id": 882,
    "name": "V3-0324",
    "isReal": true,
    "fullNameWithCompany": "DeepSeek — DeepSeek-V3-0324"
  },
  {
    "id": 883,
    "name": "Zephyr Pro 3",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Zephyr Pro 3 (generated for the game)"
  },
  {
    "id": 884,
    "name": "Nova Logic",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nova Logic (generated for the game)"
  },
  {
    "id": 885,
    "name": "Flash 3.5",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemini 3.5 Flash"
  },
  {
    "id": 886,
    "name": "Sonnet 4.7",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sonnet 4.7 (generated for the game)"
  },
  {
    "id": 887,
    "name": "LFM2.5-1.2B-Instruct",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-1.2B-Instruct"
  },
  {
    "id": 888,
    "name": "Opus 4.5",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Opus 4.5"
  },
  {
    "id": 889,
    "name": "PaliGemma 2 28B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — PaliGemma 2 28B"
  },
  {
    "id": 890,
    "name": "Saaras V4",
    "isReal": true,
    "fullNameWithCompany": "Sarvam AI — Saaras V4"
  },
  {
    "id": 891,
    "name": "MiMo-7B-SFT",
    "isReal": true,
    "fullNameWithCompany": "Xiaomi MiMo — MiMo-7B-SFT"
  },
  {
    "id": 892,
    "name": "3.5-27B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.5-27B"
  },
  {
    "id": 893,
    "name": "Phi-4-nano-reasoning",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Phi-4-nano-reasoning (generated for the game)"
  },
  {
    "id": 894,
    "name": "Ministral 5B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Ministral 5B (generated for the game)"
  },
  {
    "id": 895,
    "name": "Grok 4.20 Multi-Agent Beta",
    "isReal": true,
    "fullNameWithCompany": "xAI — Grok 4.20 Multi-Agent Beta"
  },
  {
    "id": 896,
    "name": "Falcon4 11B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Falcon4 11B (generated for the game)"
  },
  {
    "id": 897,
    "name": "Nemotron-3.5-Spark-36B-A4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Nemotron-3.5-Spark-36B-A4B (generated for the game)"
  },
  {
    "id": 898,
    "name": "Flux VL 3.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Flux VL 3.2 (generated for the game)"
  },
  {
    "id": 899,
    "name": "Halo 24B Base",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Halo 24B Base (generated for the game)"
  },
  {
    "id": 900,
    "name": "2.5-VL-32B-Instruct",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen2.5-VL-32B-Instruct"
  },
  {
    "id": 901,
    "name": "Vertex 3.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Vertex 3.5 (generated for the game)"
  },
  {
    "id": 902,
    "name": "Ember-32B-A4B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Ember-32B-A4B (generated for the game)"
  },
  {
    "id": 903,
    "name": "Fable 4.9",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Fable 4.9 (generated for the game)"
  },
  {
    "id": 904,
    "name": "5",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5"
  },
  {
    "id": 905,
    "name": "Kernel Flash 3.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Kernel Flash 3.5 (generated for the game)"
  },
  {
    "id": 906,
    "name": "Neelkanth 12B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Neelkanth 12B (generated for the game)"
  },
  {
    "id": 907,
    "name": "LFM2.5-Embedding-350M",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-Embedding-350M"
  },
  {
    "id": 908,
    "name": "3.7-Max",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.7-Max"
  },
  {
    "id": 909,
    "name": "Delta-4.2-VL-24B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Delta-4.2-VL-24B (generated for the game)"
  },
  {
    "id": 910,
    "name": "Quartz-0.8B-A8B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Quartz-0.8B-A8B (generated for the game)"
  },
  {
    "id": 911,
    "name": "Legend 4.8",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Legend 4.8 (generated for the game)"
  },
  {
    "id": 912,
    "name": "Opus 4.9",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Opus 4.9 (generated for the game)"
  },
  {
    "id": 913,
    "name": "Voxtral Mini",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Voxtral Mini"
  },
  {
    "id": 914,
    "name": "LFM2-24B-A2B",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2-24B-A2B"
  },
  {
    "id": 915,
    "name": "Lumen Live 4",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Lumen Live 4 (generated for the game)"
  },
  {
    "id": 916,
    "name": "Grok 4.7",
    "isReal": true,
    "fullNameWithCompany": "xAI — Grok 4.7"
  },
  {
    "id": 917,
    "name": "Sonicstral Mini",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sonicstral Mini (generated for the game)"
  },
  {
    "id": 918,
    "name": "M1-80k",
    "isReal": true,
    "fullNameWithCompany": "MiniMax — MiniMax-M1-80k"
  },
  {
    "id": 919,
    "name": "LFM3-VL-2B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — LFM3-VL-2B (generated for the game)"
  },
  {
    "id": 920,
    "name": "Gemma 3n E4B",
    "isReal": true,
    "fullNameWithCompany": "Google DeepMind — Gemma 3n E4B"
  },
  {
    "id": 921,
    "name": "Kimi-Linear-48B-A3B-Base",
    "isReal": true,
    "fullNameWithCompany": "Moonshot AI — Kimi-Linear-48B-A3B-Base"
  },
  {
    "id": 922,
    "name": "GraphGemma 3B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — GraphGemma 3B (generated for the game)"
  },
  {
    "id": 923,
    "name": "Pixtral Mini 2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Pixtral Mini 2 (generated for the game)"
  },
  {
    "id": 924,
    "name": "Seed1.5 / Doubao-1.5-pro",
    "isReal": true,
    "fullNameWithCompany": "ByteDance Seed — Seed1.5 / Doubao-1.5-pro"
  },
  {
    "id": 925,
    "name": "5.5 Pro",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-5.5 Pro"
  },
  {
    "id": 926,
    "name": "Moonlight-12B-A2B-Instruct",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Moonlight-12B-A2B-Instruct (generated for the game)"
  },
  {
    "id": 927,
    "name": "V4-Mini",
    "isReal": false,
    "fullNameWithCompany": "Fictional — V4-Mini (generated for the game)"
  },
  {
    "id": 928,
    "name": "2.5-7B-Instruct-1M",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen2.5-7B-Instruct-1M"
  },
  {
    "id": 929,
    "name": "Voxtral Mini TTS",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Voxtral Mini TTS"
  },
  {
    "id": 930,
    "name": "4.1 mini",
    "isReal": true,
    "fullNameWithCompany": "OpenAI — GPT-4.1 mini"
  },
  {
    "id": 931,
    "name": "M1-40k",
    "isReal": true,
    "fullNameWithCompany": "MiniMax — MiniMax-M1-40k"
  },
  {
    "id": 932,
    "name": "Granite 3.1 8B",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite 3.1 8B"
  },
  {
    "id": 933,
    "name": "LFM3",
    "isReal": false,
    "fullNameWithCompany": "Fictional — LFM3 (generated for the game)"
  },
  {
    "id": 934,
    "name": "Yotta Reason 4.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Yotta Reason 4.2 (generated for the game)"
  },
  {
    "id": 935,
    "name": "Pioneer 3.2",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Pioneer 3.2 (generated for the game)"
  },
  {
    "id": 936,
    "name": "Devstral Small",
    "isReal": true,
    "fullNameWithCompany": "Mistral AI — Devstral Small"
  },
  {
    "id": 937,
    "name": "2.5-VL-3B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen2.5-VL-3B"
  },
  {
    "id": 938,
    "name": "MiMo-7B-RL",
    "isReal": true,
    "fullNameWithCompany": "Xiaomi MiMo — MiMo-7B-RL"
  },
  {
    "id": 939,
    "name": "StreamGemma 900M",
    "isReal": false,
    "fullNameWithCompany": "Fictional — StreamGemma 900M (generated for the game)"
  },
  {
    "id": 940,
    "name": "Falcon-H1R-7B",
    "isReal": true,
    "fullNameWithCompany": "Technology Innovation Institute (TII) — Falcon-H1R-7B"
  },
  {
    "id": 941,
    "name": "Nova Reel",
    "isReal": true,
    "fullNameWithCompany": "Amazon — Amazon Nova Reel"
  },
  {
    "id": 942,
    "name": "LFM2.5-8B-A1B",
    "isReal": true,
    "fullNameWithCompany": "Liquid AI — LFM2.5-8B-A1B"
  },
  {
    "id": 943,
    "name": "Sigma-72B-A8B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Sigma-72B-A8B (generated for the game)"
  },
  {
    "id": 944,
    "name": "Gemma 4 18B-A3B",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Gemma 4 18B-A3B (generated for the game)"
  },
  {
    "id": 945,
    "name": "Cipher 3.5",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Cipher 3.5 (generated for the game)"
  },
  {
    "id": 946,
    "name": "grok-4.20-multi-agent-0309",
    "isReal": true,
    "fullNameWithCompany": "xAI — grok-4.20-multi-agent-0309"
  },
  {
    "id": 947,
    "name": "Halo 24B Preview",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Halo 24B Preview (generated for the game)"
  },
  {
    "id": 948,
    "name": "2.5-VL-7B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen2.5-VL-7B"
  },
  {
    "id": 949,
    "name": "Nemotron-3.5-Lightning-30B-A3B-NVFP4",
    "isReal": true,
    "fullNameWithCompany": "NVIDIA — NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4"
  },
  {
    "id": 950,
    "name": "Opus 4.6",
    "isReal": true,
    "fullNameWithCompany": "Anthropic — Claude Opus 4.6"
  },
  {
    "id": 951,
    "name": "Command A",
    "isReal": true,
    "fullNameWithCompany": "Cohere / Cohere Labs — Command A"
  },
  {
    "id": 952,
    "name": "Haiku 5.1",
    "isReal": false,
    "fullNameWithCompany": "Fictional — Haiku 5.1 (generated for the game)"
  },
  {
    "id": 953,
    "name": "GLM-5.2-Flash",
    "isReal": false,
    "fullNameWithCompany": "Fictional — GLM-5.2-Flash (generated for the game)"
  },
  {
    "id": 954,
    "name": "Granite-4.0-H-Tiny",
    "isReal": true,
    "fullNameWithCompany": "IBM — Granite-4.0-H-Tiny"
  },
  {
    "id": 955,
    "name": "3.5-35B-A3B",
    "isReal": true,
    "fullNameWithCompany": "Alibaba / Qwen — Qwen3.5-35B-A3B"
  },
  {
    "id": 956,
    "name": "o5-mini",
    "isReal": false,
    "fullNameWithCompany": "Fictional — o5-mini (generated for the game)"
  }
];
