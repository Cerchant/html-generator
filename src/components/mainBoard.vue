<script setup>
import creatingBoard from './creatingBoard.vue';
import leftPanel from './leftPanel.vue';
import rightPanel from './rightPanel.vue';
</script>

<template>
    <div class="main-board">
        <leftPanel></leftPanel>
        <creatingBoard></creatingBoard>
        <rightPanel></rightPanel>
        
    </div>
</template>


<style scoped>
.main-board{
    display: flex;
    flex-direction: row;
}
</style>./creating_Board.vue