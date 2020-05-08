
<script>
import {tableau} from '../store/tableau.js';
import { fly } from 'svelte/transition';
import { collectionData, firestore } from '../Firebase';
import { startWith } from 'rxjs/operators';
import { ListGroup, ListGroupItem } from 'sveltestrap';
$: tab = $tableau;



</script>
<div transition:fly={{x: 250, opacity: 1}} id='list'>
<ListGroup>
  
    {#each tab as item}
    <ListGroupItem>{item.label}</ListGroupItem>
    {/each}
  
    
   </ListGroup>
</div>

<style>
#list{
    background-color: aliceblue;
    width:150px;
    right: 0;
    position: absolute;
    max-height: 300px;
    margin-bottom: 10px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}

</style>