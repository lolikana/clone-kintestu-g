/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
	particlesInit: (engine: Engine) => Promise<void>;
	particlesLoaded: (container: Container) => void;
}
