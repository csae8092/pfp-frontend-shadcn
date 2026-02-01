<div class="progress h-1.25 sm:h-0.75"></div>
<style>
	.progress {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		/* Use CSS variables for color stops to match theme */
		background: linear-gradient(90deg, var(--foreground) 0%, var(--primary) 50%, var(--foreground) 100%);
		background-size: 200% 100%;
		animation: move 1s linear infinite;
		z-index: 1000;
	}

	@keyframes move {
		from {
			background-position: 0% 0;
		}
		to {
			background-position: 200% 0;
		}
	}
</style>
