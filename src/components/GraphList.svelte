
<script>
import {tableau} from '../store/tableau.js';
import { fly } from 'svelte/transition';
import { collectionData, firestore } from '../Firebase';
import { startWith } from 'rxjs/operators';

$: tab = $tableau;



</script>
<div transition:fly={{x: 250, opacity: 1}} id='list'>
    <ul>
    {#each tab as item}
    <li>{item.label}</li>
    {/each}
  
    </ul>
   
</div>

<style>
#list{
    background-color: aliceblue;
    width:150px;
    right: 0;
    position: absolute;
}

</style>