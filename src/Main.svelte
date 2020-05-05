<script>
import GraphList from './components/GraphList.svelte'
import App from './components/App.svelte'

let show = false;
</script>
<button on:click={()=>{show = !show}}>Liste d'objet</button>
<div id="main">
    <App/>
    
    {#if show}
    <GraphList/> 
    {/if}
</div>
<style>
#main{
    display: flex;
    flex-direction: row;
}


</style>