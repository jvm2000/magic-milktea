const state = reactive({
  container: null,
  data: {
    isDragging: false,
    startX: 0,
    scrollX: 0,
  }
})

export default function () { 
  function startDrag(event) {
    state.data.isDragging = true
    state.data.startX = event.clientX - state.container?.getBoundingClientRect().left
  }

  function handleDrag(event) {
    if (state.data.isDragging) {
    const mouseX = event.clientX - (state.container?.getBoundingClientRect().left || 0);
    const delta = mouseX - state.data.startX;
    const newScrollX = state.data.scrollX + delta;
    state.data.scrollX = Math.max(-1390, Math.min(0, newScrollX));
    state.data.startX = mouseX;
    }
  }

  function endDrag() {
    state.data.isDragging = false;
  }

  return {
    ...toRefs(state),
    startDrag,
    handleDrag,
    endDrag,
  }
}