<svelte:head>
	<title>Services</title>
	<meta name="description" content="Services hosted at kavin.rocks"/>
</svelte:head>

<section>
    <div id="services">
        <a href="https://piped.kavin.rocks">
            <img src="/piped.svg" alt="Piped" />
        </a>
        <a href="https://searx.kavin.rocks">
            <img src="/searxng.svg" alt="SearXNG" />
        </a>
        <a href="https://libreddit.kavin.rocks">
            <img src="/libreddit.png" alt="Libreddit" />
        </a>
    </div>
</section>

<style>
    #services {
        width: 100%;
        min-height: 75vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
    }

    #services a {
        text-decoration: none;
        color: var(--subtle-color);
    }

    #services a:hover {
        color: var(--accent-color);
    }

    #services a img {
        height: 7rem;
        width: auto;
        transition: all ease-in-out 0.5s;
        filter: brightness(0) saturate(100%) invert(89%) sepia(10%) saturate(208%) hue-rotate(240deg) brightness(84%) contrast(89%);
    }

    #services a img:hover {
        scale: 1.3;
        filter: brightness(0) saturate(100%) invert(90%) sepia(5%) saturate(1744%) hue-rotate(74deg) brightness(95%) contrast(96%);
    }
</style>