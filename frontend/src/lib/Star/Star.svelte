<script>
  export let filled = false;
  export let starId;
</script>

{#if filled}
  <svg
    class="star"
    on:mouseover
    on:focus
    on:mouseleave
    on:click
    data-starid={starId}
    let:class
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="31.52"
    height="29.09"
    viewBox="0 0 31.52 29.09"
  >
    <defs>
      <clipPath id="clip-path">
        <rect
          id="Rectangle_44"
          data-name="Rectangle 44"
          width="31.52"
          height="29.09"
          fill="none"
        />
      </clipPath>
    </defs>
    <g clip-path="url(#clip-path)">
      <path
        data-starid={starId}
        class="starPath"
        d="M30.518,6.932a6.78,6.78,0,0,1-1.369,4.105l-4.866,6.388-7.615,10a1.728,1.728,0,0,1-2.727.007L6.273,17.48,1.387,11.141a6.841,6.841,0,0,1,.9-9.239A7.5,7.5,0,0,1,7.191.073a7.616,7.616,0,0,1,6.043,3.016l.644.835a1.728,1.728,0,0,0,2.727-.008l.655-.86A7.529,7.529,0,0,1,28.2,1.8a6.705,6.705,0,0,1,2.318,5.129"
        transform="translate(0 0)"
        fill="#77c0c5"
      />
      <path
        data-starid={starId}
        class="starPath"
        d="M6.385,23.847l3.928-.069c.49-1.38,1.52-3.361,2.2-4.938l.139-.3.107.318c.8,2.373,2.393,7.155,3.176,9.534l-.354-.005c.607-1.7,1.2-3.4,1.826-5.094h.135l2.677.008-.167.105,1.8-3.716.158-.326.153.326,1.758,3.735-.128-.08,1.785.017h.08l.033.071L26.56,25.3H26.37l.918-1.849.022-.045h.047l4.462.078-4.462.078.07-.044-.867,1.873-.092.2-.1-.2-.91-1.852.113.071-1.785.017H23.7l-.04-.082-1.812-3.709h.311l-1.773,3.728-.05.1h-.117l-2.677.008.182-.128c-.585,1.658-1.192,3.308-1.791,4.961l-.186.515-.168-.52c-.774-2.382-2.318-7.18-3.071-9.568l.246.015c-.8,1.657-1.587,3.315-2.4,4.964h-.043Z"
        transform="translate(-3.845 -11.149)"
        fill="#fff"
      />
    </g>
  </svg>
{:else}
  <svg
    class="star"
    on:mouseover
    on:focus
    on:mouseleave
    on:click
    data-starid={starId}
    let:class
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="31.52"
    height="29.09"
    viewBox="0 0 31.52 29.09"
  >
    <defs>
      <clipPath id="clip-path">
        <rect
          id="Rectangle_47"
          data-name="Rectangle 47"
          width="31.52"
          height="29.09"
          transform="translate(0 0)"
          fill="none"
        />
      </clipPath>
    </defs>
    <g clip-path="url(#clip-path)">
      <path
        data-starid={starId}
        class="starPath"
        d="M31.02,7.431a6.775,6.775,0,0,1-1.37,4.105l-4.865,6.388-7.616,10a1.729,1.729,0,0,1-2.727.007L6.774,17.978,1.887,11.64A6.84,6.84,0,0,1,2.79,2.4,7.5,7.5,0,0,1,7.692.573a7.614,7.614,0,0,1,6.043,3.016l.644.835a1.729,1.729,0,0,0,2.727-.008l.655-.86A7.53,7.53,0,0,1,28.7,2.3,6.706,6.706,0,0,1,31.02,7.431Z"
        fill="none"
        stroke="#77c0c5"
        stroke-width="1"
      />
    </g>
  </svg>
{/if}

<style>
</style>
