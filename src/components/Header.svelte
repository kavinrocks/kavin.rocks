<header>
	<a href="/" id="brand">
		<span>kavin</span>
	</a>
	<nav>
		<input type="checkbox" id="nav-toggle" />
		<label for="nav-toggle" id="hamburger">
			<span></span>
			<span></span>
			<span></span>
		</label>
		<ul id="nav-links">
			<li><a href="/">Home</a></li>
			<li><a href="/services">Services</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<style>
	:root {
		--header-height: 5rem;
	}

	header {
		height: var(--header-height);
		background: var(--bg-color);
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: var(--max-width);
		padding: 0 1rem;
		margin: 0 auto;
	}

	#nav-toggle {
		display: none;
	}

	#hamburger {
		height: 1.2rem;
		width: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		cursor: pointer;
	}

	#hamburger span {
		width: 100%;
		height: 15%;
		background: var(--subtle-color);
		transition: 200ms ease-in-out all;
	}

	#nav-links {
		display: flex;
		position: fixed;
		/** reset browser defaults */
		margin: 0;
		padding: 0;
		margin-top: var(--header-height);
		padding-bottom: var(--header-height);
		background: var(--bg-color);
		z-index: 100;
		top: 0;
		left: 0;
		height: calc(100vh - var(--header-height));
		width: 100vw;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		opacity: 0;
		visibility: hidden;
		transition: all 0.3s ease-in-out;
	}

	#nav-toggle:checked ~ #nav-links {
		visibility: visible;
		opacity: 1;
	}

	#nav-toggle:checked + #hamburger span {
		width: 95%;
	}

	#nav-toggle:checked + #hamburger span:nth-child(1) {
		transform: rotate(45deg);
		transform-origin: top left;
	}

	#nav-toggle:checked + #hamburger span:nth-child(3) {
		transform: rotate(-45deg);
		transform-origin: bottom left;
	}

	#nav-toggle:checked + #hamburger span:nth-child(2) {
		width: 0;
		transform-origin: center;
	}

	#nav-links li {
		list-style: none;
		margin: 0.5rem 1rem;
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

	@media screen and (min-width: 800px) {
		#hamburger {
			display: none;
		}

		#nav-links {
			visibility: visible;
			opacity: 1;
			position: relative;
			flex-direction: row;
			margin: 0;
			padding: 0;
			height: auto;
			width: auto;
		}
	}
</style>
