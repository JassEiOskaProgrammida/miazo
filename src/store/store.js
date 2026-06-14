import create from 'zustand';

const useStore = create((set) => ({
  // Timer State
  timerTime: 0,
  timerRunning: false,
  timerType: 'stopwatch', // 'stopwatch' or 'countdown'
  timerDuration: 300, // 5 minutes default

  setTimerRunning: (running) => set({ timerRunning: running }),
  setTimerTime: (time) => set({ timerTime: time }),
  setTimerDuration: (duration) => set({ timerDuration: duration }),
  resetTimer: () => set({ timerTime: 0, timerRunning: false }),

  // Death Counter State
  deathCount: 0,
  incrementDeaths: () => set((state) => ({ deathCount: state.deathCount + 1 })),
  decrementDeaths: () =>
    set((state) => ({
      deathCount: Math.max(0, state.deathCount - 1),
    })),
  resetDeaths: () => set({ deathCount: 0 }),

  // Progress Bar State
  progressGoal: 100,
  progressCurrent: 0,
  setProgressGoal: (goal) => set({ progressGoal: goal }),
  setProgressCurrent: (current) => set({ progressCurrent: current }),

  // Text Widget State
  textContent: 'Miazo',
  setTextContent: (text) => set({ textContent: text }),

  // Chat Feed State
  chatMessages: [],
  addChatMessage: (message) =>
    set((state) => ({
      chatMessages: [
        ...state.chatMessages.slice(-9),
        { id: Date.now(), text: message },
      ],
    })),

  // UI State
  showTimer: true,
  showDeathCounter: true,
  showProgressBar: true,
  showTextWidget: true,
  showChatFeed: true,

  toggleWidget: (widget) =>
    set((state) => ({
      [widget]: !state[widget],
    })),

  // Hotkeys State
  hotkeys: {
    toggleTimer: 'F1',
    incrementDeaths: 'F2',
    resetDeaths: 'F3',
  },
  setHotkey: (action, key) =>
    set((state) => ({
      hotkeys: {
        ...state.hotkeys,
        [action]: key,
      },
    })),
}));

export { useStore };
