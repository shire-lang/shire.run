<script lang="ts">
    export let title: string;
    export let data: any;
    export let featured: boolean = false;

    import Grid from "./Grid.svelte";
    import GridItem from "./GridItem.svelte";

    const search = new URLSearchParams(window.location.search);
    const searchQuery = search.get("q") ?? "";

    const filteredData = data.filter((item: any) => item.data.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.data.description.toLowerCase().includes(searchQuery.toLowerCase()));
</script>

<section id={title.toLowerCase()} class="w-[1600px] mx-auto mt-10">
    <a class="title text-2xl pl-0 inline-block" href={`#${title.toLowerCase()}`}>{title}</a>
    <Grid>
        {#each filteredData as pkg}
            <GridItem
                type={pkg.collection}
                title={pkg.data.title}
                description={pkg.data.description}
                link={pkg.data.link}
                featured={featured}
                installCmd={pkg.data.installCmd}
            />
        {/each}
    </Grid>
</section>

<style>
.title {
    color: #1C274C;
    font-weight: bold;
}
</style>
