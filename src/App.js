import { useState, useEffect } from 'react';

const phases = [
  {
    id: 1,
    title: 'PHASE 01',
    subtitle: 'Neural Foundations',
    duration: 'Month 1',
    color: '#f97316',
    emoji: '🧱',
    goal: "Build the PyTorch muscle memory. You won't write novel architectures yet — you'll learn to think in tensors and gradients like breathing.",
    analogy:
      'Like a bodybuilder learning proper form with light weights before loading the bar.',
    daily: {
      theory: 'Fast.ai Lesson or Andrej Karpathy lecture',
      code: 'Reimplement something small from scratch',
      project: 'Keep a lab notebook — one page per day',
    },
    weeks: [
      {
        week: 'Week 1–2',
        focus: 'PyTorch Fundamentals',
        tasks: [
          'Tensors, autograd, broadcasting — understand shapes cold',
          'Write a training loop from scratch (no libraries)',
          'Implement MLP on MNIST',
          'Profile your code, fix the slow parts',
        ],
        resources: [
          {
            name: 'Karpathy: micrograd',
            url: 'https://github.com/karpathy/micrograd',
          },
          {
            name: 'PyTorch Docs (official)',
            url: 'https://pytorch.org/tutorials/',
          },
          { name: 'Fast.ai Part 1', url: 'https://course.fast.ai/' },
        ],
      },
      {
        week: 'Week 3–4',
        focus: 'CNNs & Modern Training',
        tasks: [
          'Implement ResNet block from scratch',
          'Master: batch norm, dropout, weight decay, LR schedulers',
          'Debug NaN gradients, exploding activations',
          'Train CIFAR-10 to >90% accuracy',
        ],
        resources: [
          {
            name: 'CS231n Convolutional Networks',
            url: 'https://cs231n.github.io/',
          },
          {
            name: 'Karpathy: Neural Nets Zero to Hero',
            url: 'https://karpathy.ai/zero-to-hero.html',
          },
          {
            name: 'Papers with Code: ResNet',
            url: 'https://paperswithcode.com/method/resnet',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'PHASE 02',
    subtitle: 'The Transformer Era',
    duration: 'Month 2',
    color: '#a855f7',
    emoji: '⚡',
    goal: 'Understand attention so well you can derive it on a whiteboard. This is the engine of everything at Humanoid.',
    analogy:
      'Like a powerlifter locking in the squat — one foundational movement that unlocks everything else.',
    daily: {
      theory: 'Read 1 paper — annotate it',
      code: "Implement that paper's key idea",
      project: 'Build your own mini-GPT',
    },
    weeks: [
      {
        week: 'Week 1–2',
        focus: 'Attention & Transformers',
        tasks: [
          'Implement multi-head attention from scratch',
          'Build a transformer encoder/decoder from scratch',
          "Follow Karpathy's makemore / nanoGPT series",
          'Understand positional encodings (sin, RoPE, ALiBi)',
        ],
        resources: [
          {
            name: 'Karpathy: nanoGPT',
            url: 'https://github.com/karpathy/nanoGPT',
          },
          {
            name: 'Attention Is All You Need (paper)',
            url: 'https://arxiv.org/abs/1706.03762',
          },
          {
            name: 'The Illustrated Transformer',
            url: 'https://jalammar.github.io/illustrated-transformer/',
          },
        ],
      },
      {
        week: 'Week 3–4',
        focus: 'HuggingFace & Pre-trained Models',
        tasks: [
          'Fine-tune BERT/GPT-2 on a custom task',
          'Learn tokenization, BPE, SentencePiece',
          'Run inference, benchmark latency',
          'Understand KV caching',
        ],
        resources: [
          {
            name: 'HuggingFace NLP Course',
            url: 'https://huggingface.co/learn/nlp-course',
          },
          {
            name: 'Lilian Weng: Attention Blog',
            url: 'https://lilianweng.github.io/posts/2018-06-24-attention/',
          },
          {
            name: 'HF Transformers Docs',
            url: 'https://huggingface.co/docs/transformers',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'PHASE 03',
    subtitle: 'Multimodal Intelligence',
    duration: 'Month 3',
    color: '#06b6d4',
    emoji: '👁️',
    goal: 'Make models that see AND reason. Vision-Language is the direct stack Humanoid uses for robot perception.',
    analogy:
      'Adding Olympic lifts to your program — technically complex, massively powerful.',
    daily: {
      theory: '1 VLM/vision paper per day',
      code: 'Experiment with a VLM on your own images',
      project: 'Build a visual Q&A demo',
    },
    weeks: [
      {
        week: 'Week 1–2',
        focus: 'Vision Transformers & CLIP',
        tasks: [
          'Implement ViT (Vision Transformer) from scratch',
          'Understand contrastive learning (CLIP architecture)',
          'Run CLIP zero-shot classification',
          'Fine-tune ViT on a custom dataset',
        ],
        resources: [
          {
            name: 'ViT Paper (Dosovitskiy)',
            url: 'https://arxiv.org/abs/2010.11929',
          },
          {
            name: 'CLIP Paper (OpenAI)',
            url: 'https://arxiv.org/abs/2103.00020',
          },
          {
            name: 'timm library',
            url: 'https://github.com/huggingface/pytorch-image-models',
          },
        ],
      },
      {
        week: 'Week 3–4',
        focus: 'Vision-Language Models (VLMs)',
        tasks: [
          'Run LLaVA or InstructBLIP locally',
          'Fine-tune a VLM on custom image-text pairs',
          'Understand cross-attention between modalities',
          'Benchmark multimodal inference speed',
        ],
        resources: [
          {
            name: 'LLaVA (Visual Instruction Tuning)',
            url: 'https://llava-vl.github.io/',
          },
          {
            name: 'InstructBLIP Paper',
            url: 'https://arxiv.org/abs/2305.06500',
          },
          {
            name: 'OpenVLA (target framework)',
            url: 'https://openvla.github.io/',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'PHASE 04',
    subtitle: 'Reinforcement Learning',
    duration: 'Month 4',
    color: '#10b981',
    emoji: '🤖',
    goal: 'Learn to teach agents through reward. RL is how robots move from imitating to improving. This is where the robotics story begins.',
    analogy:
      "Sport-specific training — you've built the body, now you train for your event.",
    daily: {
      theory: 'Spinning Up / Sutton & Barto chapter',
      code: 'Train an agent in Gymnasium',
      project: 'Log everything in W&B',
    },
    weeks: [
      {
        week: 'Week 1–2',
        focus: 'RL Fundamentals',
        tasks: [
          'Implement REINFORCE and DQN from scratch',
          'Solve CartPole, LunarLander in Gymnasium',
          'Understand reward shaping, exploration',
          'Learn value functions, policy gradients',
        ],
        resources: [
          { name: 'OpenAI Spinning Up', url: 'https://spinningup.openai.com/' },
          {
            name: 'Sutton & Barto (free book)',
            url: 'http://incompleteideas.net/book/the-book-2nd.html',
          },
          {
            name: 'CleanRL implementations',
            url: 'https://github.com/vwxyzjn/cleanrl',
          },
        ],
      },
      {
        week: 'Week 3–4',
        focus: 'PPO, SAC & Behavior Cloning',
        tasks: [
          'Implement PPO from scratch (most used in robotics)',
          'Implement SAC for continuous control',
          'Implement Behavior Cloning (BC) from demonstrations',
          'DAgger algorithm — understand dataset aggregation',
        ],
        resources: [
          {
            name: 'PPO Paper (Schulman)',
            url: 'https://arxiv.org/abs/1707.06347',
          },
          {
            name: 'Imitation Learning Survey',
            url: 'https://arxiv.org/abs/1811.06521',
          },
          {
            name: 'D4RL offline RL datasets',
            url: 'https://github.com/Farama-Foundation/D4RL',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'PHASE 05',
    subtitle: 'Robot Learning & VLAs',
    duration: 'Month 5',
    color: '#f59e0b',
    emoji: '🦾',
    goal: 'This is where everything converges. Vision + Language + Actions = VLA. This is exactly what Humanoid builds.',
    analogy: 'Competition day. All the training comes together.',
    daily: {
      theory: 'Robotics learning paper (RT-2, OpenVLA, π)',
      code: 'Experiment with a VLA or simulation',
      project: 'Build your capstone demo',
    },
    weeks: [
      {
        week: 'Week 1–2',
        focus: 'Sim-to-Real & MuJoCo',
        tasks: [
          'Set up MuJoCo / Isaac Gym environment',
          'Train a simple manipulation policy',
          'Understand domain randomization for sim-to-real',
          'Run teleop data collection pipeline',
        ],
        resources: [
          {
            name: 'MuJoCo Getting Started',
            url: 'https://mujoco.readthedocs.io/',
          },
          {
            name: 'Isaac Lab (NVIDIA)',
            url: 'https://isaac-sim.github.io/IsaacLab/',
          },
          {
            name: 'Sim-to-Real Survey',
            url: 'https://arxiv.org/abs/2009.13303',
          },
        ],
      },
      {
        week: 'Week 3–4',
        focus: 'VLA Frameworks (End Goal)',
        tasks: [
          'Run OpenVLA on a manipulation task',
          'Study RT-2 architecture (vision-language-action)',
          'Study π (Physical Intelligence) models',
          'Fine-tune OpenVLA on a custom task',
        ],
        resources: [
          {
            name: 'OpenVLA (GitHub)',
            url: 'https://github.com/openvla/openvla',
          },
          {
            name: 'RT-2 Paper (Google)',
            url: 'https://arxiv.org/abs/2307.15818',
          },
          {
            name: 'π0 Paper (Physical Intelligence)',
            url: 'https://arxiv.org/abs/2410.24164',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'PHASE 06',
    subtitle: 'MLOps & Production',
    duration: 'Month 6',
    color: '#ef4444',
    emoji: '🚀',
    goal: 'Ship it. Humanoid explicitly wants distributed training, edge inference, and pipelines. Build things that actually run.',
    analogy: "The photo shoot — you show the world what you've built.",
    daily: {
      theory: 'System design / infra paper or blog',
      code: 'Optimize, profile, deploy something',
      project: 'Polish your portfolio',
    },
    weeks: [
      {
        week: 'Week 1–2',
        focus: 'Distributed Training & Data Pipelines',
        tasks: [
          'Master DDP (Distributed Data Parallel) in PyTorch',
          'Build a streaming dataset with WebDataset',
          'Implement checkpointing & experiment versioning',
          'Set up W&B experiment tracking',
        ],
        resources: [
          {
            name: 'PyTorch DDP Tutorial',
            url: 'https://pytorch.org/tutorials/intermediate/ddp_tutorial.html',
          },
          {
            name: 'WebDataset (streaming)',
            url: 'https://github.com/webdataset/webdataset',
          },
          { name: 'Weights & Biases Docs', url: 'https://docs.wandb.ai/' },
        ],
      },
      {
        week: 'Week 3–4',
        focus: 'Edge Inference & Portfolio',
        tasks: [
          'Quantize a model (INT8) and benchmark speedup',
          'Export to ONNX, benchmark latency/throughput',
          'Write up 2–3 projects with clear trade-off analysis',
          'Put everything on GitHub with READMEs',
        ],
        resources: [
          {
            name: 'PyTorch Quantization Guide',
            url: 'https://pytorch.org/docs/stable/quantization.html',
          },
          {
            name: 'TorchScript & ONNX Export',
            url: 'https://pytorch.org/tutorials/advanced/super_resolution_with_onnxruntime.html',
          },
          {
            name: 'ML System Design (Chip Huyen)',
            url: 'https://huyenchip.com/machine-learning-systems-design/toc.html',
          },
        ],
      },
    ],
  },
];

const dailySplit = [
  {
    hour: 'Hour 1',
    label: 'THEORY',
    desc: 'Papers, lectures, concepts',
    icon: '📖',
    color: '#f97316',
  },
  {
    hour: 'Hour 2',
    label: 'CODE',
    desc: 'Implement, experiment, break things',
    icon: '💻',
    color: '#a855f7',
  },
  {
    hour: 'Hour 3',
    label: 'BUILD',
    desc: 'Projects, lab notebook, portfolio',
    icon: '🔧',
    color: '#06b6d4',
  },
];

const rules = [
  {
    n: '01',
    rule: "Never copy-paste code you don't understand",
    detail:
      "If you can't rewrite it from memory after reading, you don't own it.",
  },
  {
    n: '02',
    rule: 'Implement every key concept from scratch once',
    detail:
      'Then use the library. First do it raw — attention, backprop, PPO loop.',
  },
  {
    n: '03',
    rule: 'Keep a daily lab notebook',
    detail:
      'One page. What you tried, what broke, what you learned. This becomes your interview prep.',
  },
  {
    n: '04',
    rule: 'Read one paper per week minimum',
    detail:
      'Annotate it. Summarize it in 3 sentences. The job requires you to read primary research.',
  },
  {
    n: '05',
    rule: 'Ship something every month',
    detail:
      'A GitHub repo with working code. Not perfect — working. Progress compounds.',
  },
  {
    n: '06',
    rule: 'Communicate trade-offs, not just results',
    detail:
      'Humanoid explicitly wants this. Write WHY you made each design choice.',
  },
];

function ResourceLink({ res, color, t }) {
  const [hovered, setHovered] = useState(false);
  const open = () => window.open(res.url, '_blank');
  const enter = () => setHovered(true);
  const leave = () => setHovered(false);
  return (
    <div
      onClick={open}
      onMouseEnter={enter}
      onMouseLeave={leave}
      style={{
        display: 'block',
        padding: '8px 12px',
        background: t.bg4,
        border: '1px solid ' + (hovered ? color + '40' : '#1e1e1e'),
        marginBottom: 6,
        fontSize: 11,
        color: hovered ? color : '#aaa',
        cursor: 'pointer',
        transition: 'all 0.15s',
      }}
    >
      {'↗ ' + res.name}
    </div>
  );
}

const DB_URL = 'https://mlathlete-default-rtdb.europe-west1.firebasedatabase.app/sessions.json';
// ↑ paste your Firebase URL here, keep the /sessions.json at the end

function ProgressTracker({ t }) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [sessions, setSessions] = useState({});
  const [syncing, setSyncing] = useState(false);
  const [status, setStatus] = useState('');

  // Load from Firebase on mount
  useEffect(() => {
    const load = async () => {
      setSyncing(true);
      try {
        const res = await fetch(DB_URL);
        const data = await res.json();
        if (data) setSessions(data);
      } catch { setStatus('⚠ could not load — check connection'); }
      setSyncing(false);
    };
    load();
  }, []);

  const save = async (updated) => {
    setSessions(updated);
    setSyncing(true);
    setStatus('');
    try {
      await fetch(DB_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
      });
      setStatus('✓ synced');
      setTimeout(() => setStatus(''), 2000);
    } catch { setStatus('⚠ sync failed'); }
    setSyncing(false);
  };

  const markDay = (dateStr) => {
  const current = sessions[dateStr];
  const next = !current ? '1hr' : current === '1hr' ? '2hr' : current === '2hr' ? '3hr' : null;
  const updated = { ...sessions };
  if (next) updated[dateStr] = next; else delete updated[dateStr];
  save(updated);
};

  const getDaysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();
  const getFirstDay = (y, m) => new Date(y, m, 1).getDay();

  const totalDays = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDay(currentYear, currentMonth);
  const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

  const allSessions = Object.values(sessions);
  const total3hr = allSessions.filter(v => v === '3hr').length;
const total2hr = allSessions.filter(v => v === '2hr').length;
const total1hr = allSessions.filter(v => v === '1hr').length;
const totalHours = total3hr * 3 + total2hr * 2 + total1hr;
  let streak = 0;
  const d = new Date(today);
  while (true) {
    const key = d.toISOString().split('T')[0];
    if (sessions[key]) { streak++; d.setDate(d.getDate() - 1); }
    else break;
  }

  const phase = Math.min(6, Math.floor(totalHours / (3 * 30)) + 1);
  const progressPct = Math.min(100, Math.round((totalHours / 540) * 100));

  return (
    <div style={{ marginTop: 60, borderTop: `1px solid ${t.border2}`, paddingTop: 40 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
        <div>
          <div style={{ fontSize: 9, letterSpacing: '0.3em', color: t.text5, marginBottom: 6 }}>DAILY TRAINING LOG</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: t.text }}>Progress Calendar</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {syncing && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#f97316', animation: 'pulse 1s infinite' }} />}
          <span style={{ fontSize: 10, color: status.startsWith('✓') ? '#10b981' : '#f97316', letterSpacing: '0.1em' }}>{status}</span>
        </div>
      </div>
      <div style={{ fontSize: 12, color: t.text4, marginBottom: 28 }}>
        Syncs across all your devices. Click once → 1hr, twice → 3hr, three times → clear.
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 32 }}>
        {[
          { label: 'CURRENT STREAK', value: `${streak}d`, color: '#f97316' },
          { label: 'TOTAL HOURS', value: `${totalHours}h`, color: '#a855f7' },
          { label: 'FULL SESSIONS', value: total3hr, color: '#06b6d4' },
          { label: 'OVERALL PROGRESS', value: `${progressPct}%`, color: '#10b981' },
        ].map(s => (
          <div key={s.label} style={{ background: t.bg2, border: `1px solid ${t.border2}`, padding: '14px 16px' }}>
            <div style={{ fontSize: 9, letterSpacing: '0.2em', color: t.text5, marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 10, color: t.text5, letterSpacing: '0.15em' }}>PHASE {phase} OF 6</span>
          <span style={{ fontSize: 10, color: '#f97316' }}>{totalHours} / 540 hours</span>
        </div>
        <div style={{ background: t.bg3, height: 6, width: '100%' }}>
          <div style={{ background: '#f97316', height: '100%', width: `${progressPct}%`, transition: 'width 0.4s' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
          {['P1','P2','P3','P4','P5','P6'].map((p, i) => (
            <span key={p} style={{ fontSize: 9, color: i < phase ? '#f97316' : '#333', letterSpacing: '0.1em' }}>{p}</span>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <div style={{ background: t.bg2, border: `1px solid ${t.border2}`, padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <button
            onClick={() => { if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); } else setCurrentMonth(m => m - 1); }}
            style={{ background: 'none', border: '1px solid #2a2a2a', color: '#aaa', padding: '4px 12px', cursor: 'pointer', fontSize: 14, fontFamily: 'inherit' }}
          >‹</button>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#ddd', letterSpacing: '0.1em' }}>{monthName} {currentYear}</span>
          <button
            onClick={() => { if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); } else setCurrentMonth(m => m + 1); }}
            style={{ background: 'none', border: '1px solid #2a2a2a', color: '#aaa', padding: '4px 12px', cursor: 'pointer', fontSize: 14, fontFamily: 'inherit' }}
          >›</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 4 }}>
          {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
            <div key={d} style={{ textAlign: 'center', fontSize: 9, color: t.text6, letterSpacing: '0.1em', paddingBottom: 4 }}>{d}</div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
          {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
          {Array.from({ length: totalDays }).map((_, i) => {
            const dayNum = i + 1;
            const dateStr = `${currentYear}-${String(currentMonth+1).padStart(2,'0')}-${String(dayNum).padStart(2,'0')}`;
            const todayStr = today.toISOString().split('T')[0];
            const session = sessions[dateStr];
            const isToday = dateStr === todayStr;
            const isFuture = dateStr > todayStr;
            const bg = session === '3hr' ? '#f97316' : session === '2hr' ? '#f97316aa' : session === '1hr' ? '#f9731640' : isToday ? '#1a1a1a' : t.bg3;
            return (
              <div
                key={dayNum}
                onClick={() => !isFuture && markDay(dateStr)}
                style={{
                  background: bg,
                  border: isToday ? '1px solid #f97316' : `1px solid ${t.border}`,
                  aspectRatio: '1', display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  cursor: isFuture ? 'default' : 'pointer',
                  opacity: isFuture ? 0.2 : 1, transition: 'all 0.15s', gap: 1
                }}
              >
                <span style={{ fontSize: 10, color: session === '3hr' ? '#000' : t.text3, fontWeight: isToday ? 700 : 400 }}>{dayNum}</span>
                {session && <span style={{ fontSize: 7, color: session === '3hr' ? '#000' : '#f97316' }}>{session}</span>}
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: 20, marginTop: 16, paddingTop: 16, borderTop: `1px solid ${t.border2}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 12, height: 12, background: '#f97316' }} />
            <span style={{ fontSize: 10, color: t.text4 }}>3hr full session</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 12, height: 12, background: '#f9731640', border: `1px solid ${t.border}` }} />
            <span style={{ fontSize: 10, color: t.text4 }}>1hr partial</span>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function TrainingPlan() {
  const [dark, setDark] = useState(true);
  const t = {
  bg: dark ? '#0a0a0a' : '#f5f5f5',
  bg2: dark ? '#0d0d0d' : '#ffffff',
  bg3: dark ? '#111111' : '#eeeeee',
  bg4: dark ? '#141414' : '#e5e5e5',
  border: dark ? '#1e1e1e' : '#d4d4d4',
  border2: dark ? '#1a1a1a' : '#cccccc',
  text: dark ? '#e2e8f0' : '#111111',
  text2: dark ? '#cccccc' : '#333333',
  text3: dark ? '#888888' : '#555555',
  text4: dark ? '#666666' : '#777777',
  text5: dark ? '#555555' : '#999999',
  text6: dark ? '#444444' : '#aaaaaa',
};
  const [activePhase, setActivePhase] = useState(null);
  const [activeWeek, setActiveWeek] = useState(null);

  const togglePhase = (id) => {
    setActivePhase(activePhase === id ? null : id);
    setActiveWeek(null);
  };

  return (
    <div
      style={{
        fontFamily: "'Courier New', 'Lucida Console', monospace",
        background: t.bg,
        minHeight: '100vh',
        color: t.text,
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: `1px solid ${t.border}`,
          padding: '40px 32px 32px',
          background: 'linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 100%)',
        }}
      >
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: '0.3em',
                color: t.text4,
                textTransform: 'uppercase',
              }}
            >
              HUMANOID ML ENGINEER
            </span>
            <span style={{ color: '#333' }}>///</span>
            <span
              style={{
                fontSize: 11,
                letterSpacing: '0.3em',
                color: '#f97316',
                textTransform: 'uppercase',
              }}
            >
              6-MONTH TRAINING PROTOCOL
            </span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 52px)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              margin: '0 0 12px',
              lineHeight: 1.05,
            }}
          >
            THE
            <br />
            <span style={{ color: '#f97316' }}>ML ATHLETE</span>
            <br />
            PROGRAM
          </h1>
          <p
            style={{
              color: t.text3,
              fontSize: 13,
              maxWidth: 520,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            3 hours daily → 6 months → job-ready for frontier robotics AI.
            Progressive overload. Every phase builds on the last.
          </p>
          <button
  onClick={() => setDark(d => !d)}
  style={{
    marginTop: 20, background: 'none',
    border: `1px solid ${t.border}`,
    color: t.text3, padding: '6px 16px',
    fontSize: 11, cursor: 'pointer',
    fontFamily: 'inherit', letterSpacing: '0.15em'
  }}
>
  {dark ? '☀ LIGHT MODE' : '☾ DARK MODE'}
</button>
          <div
            style={{
              display: 'flex',
              gap: 12,
              marginTop: 28,
              flexWrap: 'wrap',
            }}
          >
            {dailySplit.map((s) => (
              <div
                key={s.label}
                style={{
                  border: `1px solid ${s.color}30`,
                  background: `${s.color}08`,
                  padding: '12px 18px',
                  flex: '1 1 140px',
                }}
              >
                <div style={{ fontSize: 18, marginBottom: 4 }}>{s.icon}</div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.2em',
                    color: s.color,
                    marginBottom: 2,
                  }}
                >
                  {s.hour} — {s.label}
                </div>
                <div style={{ fontSize: 11, color: '#777' }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phases */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '32px 32px' }}>
        <div style={{ display: 'flex', gap: 4, marginBottom: 32 }}>
          {phases.map((p) => (
            <div
              key={p.id}
              onClick={() => togglePhase(p.id)}
              style={{
                flex: 1,
                height: 6,
                background: activePhase === p.id ? p.color : '#222',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            />
          ))}
        </div>

        {phases.map((phase) => (
          <div key={phase.id} style={{ marginBottom: 4 }}>
            <div
              onClick={() => togglePhase(phase.id)}
              style={{
                border: `1px solid ${
                  activePhase === phase.id ? phase.color + '60' : '#1e1e1e'
                }`,
                background:
                  activePhase === phase.id ? `${phase.color}06` : t.bg2,
                padding: '20px 24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.2s',
                userSelect: 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <span style={{ fontSize: 22 }}>{phase.emoji}</span>
                <div>
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        letterSpacing: '0.25em',
                        color: phase.color,
                      }}
                    >
                      {phase.title}
                    </span>
                    <span style={{ fontSize: 10, color: t.text6 }}>—</span>
                    <span
                      style={{
                        fontSize: 10,
                        letterSpacing: '0.15em',
                        color: t.text5,
                      }}
                    >
                      {phase.duration.toUpperCase()}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: t.text,
                      marginTop: 2,
                    }}
                  >
                    {phase.subtitle}
                  </div>
                </div>
              </div>
              <span
                style={{
                  color: activePhase === phase.id ? phase.color : t.text6,
                  fontSize: 18,
                }}
              >
                {activePhase === phase.id ? '▲' : '▼'}
              </span>
            </div>

            {activePhase === phase.id && (
              <div
                style={{
                  border: `1px solid ${phase.color}30`,
                  borderTop: 'none',
                  padding: '24px',
                  background: t.bg2,
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 16,
                    marginBottom: 24,
                  }}
                >
                  <div
                    style={{
                      background: t.bg3,
                      padding: 16,
                      borderLeft: `3px solid ${phase.color}`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 9,
                        letterSpacing: '0.2em',
                        color: phase.color,
                        marginBottom: 8,
                      }}
                    >
                      PHASE GOAL
                    </div>
                    <div
                      style={{ fontSize: 12, color: t.text2, lineHeight: 1.7 }}
                    >
                      {phase.goal}
                    </div>
                  </div>
                  <div
                    style={{
                      background: t.bg3,
                      padding: 16,
                      borderLeft: '3px solid #333',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 9,
                        letterSpacing: '0.2em',
                        color: t.text4,
                        marginBottom: 8,
                      }}
                    >
                      BODYBUILDING ANALOGY
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: t.text3,
                        lineHeight: 1.7,
                        fontStyle: 'italic',
                      }}
                    >
                      {phase.analogy}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: t.bg3,
                    padding: 16,
                    marginBottom: 24,
                    borderLeft: `3px solid ${phase.color}40`,
                  }}
                >
                  <div
                    style={{
                      fontSize: 9,
                      letterSpacing: '0.2em',
                      color: t.text4,
                      marginBottom: 12,
                    }}
                  >
                    DAILY 3-HOUR SPLIT THIS PHASE
                  </div>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    {Object.entries(phase.daily).map(([key, val]) => (
                      <div key={key} style={{ flex: '1 1 160px' }}>
                        <span
                          style={{
                            fontSize: 9,
                            letterSpacing: '0.15em',
                            color: phase.color,
                          }}
                        >
                          {key.toUpperCase()} —{' '}
                        </span>
                        <span style={{ fontSize: 11, color: '#aaa' }}>
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {phase.weeks.map((week, wi) => (
                  <div key={wi} style={{ marginBottom: 12 }}>
                    <div
                      onClick={() =>
                        setActiveWeek(
                          activeWeek === `${phase.id}-${wi}`
                            ? null
                            : `${phase.id}-${wi}`
                        )
                      }
                      style={{
                        background:
                          activeWeek === `${phase.id}-${wi}`
                            ? '#161616'
                            : t.bg3,
                        border: `1px solid ${t.border}`,
                        padding: '14px 18px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontSize: 9,
                            letterSpacing: '0.2em',
                            color: t.text5,
                          }}
                        >
                          {week.week} —{' '}
                        </span>
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: '#ddd',
                          }}
                        >
                          {week.focus}
                        </span>
                      </div>
                      <span style={{ color: t.text6, fontSize: 12 }}>
                        {activeWeek === `${phase.id}-${wi}` ? '▲' : '▼'}
                      </span>
                    </div>
                    {activeWeek === `${phase.id}-${wi}` && (
                      <div
                        style={{
                          background: t.bg2,
                          border: `1px solid ${t.border2}`,
                          borderTop: 'none',
                          padding: 18,
                        }}
                      >
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 20,
                          }}
                        >
                          <div>
                            <div
                              style={{
                                fontSize: 9,
                                letterSpacing: '0.2em',
                                color: phase.color,
                                marginBottom: 12,
                              }}
                            >
                              WORKOUTS (TASKS)
                            </div>
                            {week.tasks.map((task, ti) => (
                              <div
                                key={ti}
                                style={{
                                  display: 'flex',
                                  gap: 10,
                                  marginBottom: 10,
                                  alignItems: 'flex-start',
                                }}
                              >
                                <span
                                  style={{
                                    color: phase.color,
                                    fontSize: 10,
                                    marginTop: 2,
                                    flexShrink: 0,
                                  }}
                                >
                                  ▸
                                </span>
                                <span
                                  style={{
                                    fontSize: 12,
                                    color: '#bbb',
                                    lineHeight: 1.6,
                                  }}
                                >
                                  {task}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div>
                            <div
                              style={{
                                fontSize: 9,
                                letterSpacing: '0.2em',
                                color: t.text4,
                                marginBottom: 12,
                              }}
                            >
                              EQUIPMENT (RESOURCES)
                            </div>
                            {week.resources.map((res, ri) => (
                              <ResourceLink
                                key={ri}
                                res={res}
                                color={phase.color}
                                t={t}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Rules */}
        <div style={{ marginTop: 40 }}>
          <div
            style={{
              fontSize: 9,
              letterSpacing: '0.3em',
              color: t.text5,
              marginBottom: 20,
            }}
          >
            THE IRON RULES — NEVER BREAK THESE
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 12,
            }}
          >
            {rules.map((r) => (
              <div
                key={r.n}
                style={{
                  border: `1px solid ${t.border2}`,
                  padding: '16px 18px',
                  background: t.bg2,
                }}
              >
                <div
                  style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}
                >
                  <span
                    style={{
                      color: '#f97316',
                      fontSize: 10,
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: 3,
                    }}
                  >
                    {r.n}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: '#ddd',
                        marginBottom: 4,
                      }}
                    >
                      {r.rule}
                    </div>
                    <div
                      style={{ fontSize: 11, color: t.text4, lineHeight: 1.6 }}
                    >
                      {r.detail}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

            <ProgressTracker t={t} />

        <div
          style={{
            marginTop: 40,
            paddingTop: 24,
            borderTop: `1px solid ${t.border2}`,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 10, color: t.text6, letterSpacing: '0.15em' }}>
            TARGET: HUMANOID — ML ENGINEER — HMND01
          </div>
          <div
            style={{ fontSize: 10, color: '#f97316', letterSpacing: '0.15em' }}
          >
            6 MONTHS → DEPLOYMENT READY
          </div>
        </div>
      </div>
    </div>
  );
}
