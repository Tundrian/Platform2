<script lang="ts">
    import { InputChip } from '@skeletonlabs/skeleton';

    let bulletPoints: string[];
    let examples: string[];
    let parallels: string[];

</script>

<h1 class="text-center p-5 text-4xl">Add Term!!</h1>

<div class="mx-5">
	<label class="label my-5">
		<span>Term Name</span>
		<input class="input" type="text" placeholder="Input" />
	</label>

	<label class="label my-5">
		<span>Brief Description (80)</span>
		<textarea class="textarea" rows="3" placeholder="enter a brief description here" />
	</label>

    <label class="label my-5">
		<span>Full Explanation</span>
		<textarea class="textarea" rows="10" placeholder="enter a longer explanation here" />
	</label>

    <label class="label my-5">
		<span>Bullet Points</span>
		<InputChip bind:value={bulletPoints} name="Bullet Points" placeholder="Enter any value..."/>
	</label>

    <label class="label my-5">
		<span>Examples</span>
		<InputChip bind:value={examples} name="Examples" placeholder="Enter any value..."/>
	</label>

    <label class="label my-5">
		<span>Parallels</span>
		<InputChip bind:value={parallels} name="Parallels" placeholder="Enter any value..."/>
	</label>
    
    <button class="btn variant-filled w-full variant-filled-success">Submit
    </button>

</div>

