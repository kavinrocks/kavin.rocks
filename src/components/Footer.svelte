<footer>
    <p>© {new Date().getFullYear()} kavin.rocks</p>
    <div id="social-links">
        <a href="https://github.com/kavinrocks/kavin.rocks">
            <img src="/github.svg" alt="GitHub" />
        </a>
    </div>
</footer>

<style>
    footer {
        padding: 1rem 0.5rem;
        max-width: var(--max-width);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    }

    footer img {
        filter: var(--subtle-filter);
        height: 1.5rem;
        width: auto;
    }

    footer img:hover {
        filter: var(--accent-filter);
    }
</style>