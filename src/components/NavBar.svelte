<nav>
	<div id="brand">
		<span>kavin</span>
	</div>
	<ul id="nav-links">
		<li><a href="/">Home</a></li>
		<li><a href="/services">Services</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav>

<style>
	nav {
		padding: 1rem 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: var(--max-width);
		margin: 0 auto;
	}

	#nav-links {
		display: flex;
	}

	#nav-links li {
		list-style: none;
		margin: 0 1rem;
	}

	#nav-links a {
		font-size: larger;
		text-decoration: none;
		color: var(--accent-color);
		transition: 200ms ease-in-out all;
	}

	#nav-links a:hover {
		box-shadow: 0px 3px 0px var(--accent-color);
	}
</style>
