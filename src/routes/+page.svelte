<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home of kavin.rocks"/>
</svelte:head>

<script>
	import 'uno.css';
</script>

<section>
	<h1>Welcome to kavin.rocks</h1>
	<h2 id="cmd">> ~/<span>_</span></h2>
	<div id="about">
		<div>Hosted services can be found <a href="/services">here</a>.</div>
		<div>The instances are spread over India, UK, US, Cannada, Netherlands, Germany and France.</div>
	</div>
</section>

<style>
	h1 {
		@apply text-4xl font-bold text-center;
		margin-top: 15vh;
	}

	h2 {
		@apply text-5xl font-bold text-center;
	}

	#cmd {
		color: var(--accent-color);
	}

	#cmd>span {
		font-weight: 900;
		animation: infinite blinking 1s ease-in-out;
	}

	#about {
		margin-top: 15vh;
	}

	#about div {
		@apply text-sm font-bold;
	}

	@keyframes blinking {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 100;
		}
		100% {
			opacity: 0;
		}
	}
</style>
