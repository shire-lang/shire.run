<script lang="ts">
    export let placeholder: string = "Search";
    export let className: string = "";

    const search = new URLSearchParams(window.location.search);

    let inputValue: string = search.get("q") ?? "";

    function handleSearch() {
      window.location.href = `/marketplace?q=${inputValue}`;
    }
</script>

<form class={`flex items-center gap-2 ${className}`}>
    <input
      id="input-search"
      class="border border-gray-300 rounded-md p-2 flex-1"
      type="text"
      placeholder={placeholder}
      bind:value={inputValue}
      on:keyup={(e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      }}
    />
    <button
      id="btn-search"
      class="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition-colors"
      on:click={handleSearch}
    >
      Search
    </button>
</form>

