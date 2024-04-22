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
    state.data.isDragging = true;
    state.data.startX = event.clientX - state.container?.getBoundingClientRect().left;
  }

  function handleDrag(event) {
    if (state.data.isDragging) {
      const mouseX = event.clientX - state.container?.getBoundingClientRect().left;
      const delta = mouseX - state.data.startX;
      state.data.scrollX += delta;
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