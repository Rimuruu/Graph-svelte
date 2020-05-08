<script>
import GraphList from './components/GraphList.svelte'
import Graph from './components/Graph.svelte'
import { Button, Badge } from 'sveltestrap';
import { tableau } from './store/tableau.js';

let show = false;
</script>
<Button color="info" on:click={()=>{show = !show}}>Liste de graphiques <Badge color="secondary">{$tableau.length}</Badge></Button>
<div id="main">
    <Graph/>
    
    {#if show}
    <GraphList/> 
    {/if}
</div>
<style>
#main{
    display: flex;
    flex-direction: row;
    padding: 10px;
}


</style>