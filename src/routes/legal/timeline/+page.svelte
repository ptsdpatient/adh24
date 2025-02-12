<script lang="ts">
	enum Mode {
		ONLINE = 'Online',
		OFFLINE = 'Offline'
	}

	let TIMELINE: { time: string; name: string; mode: Mode }[][] = [
		// Day 1
		[
			{ time: '10:30AM', name: 'Inauguration', mode: Mode.OFFLINE },
			{ time: '12:00PM to 4:00PM', name: 'Avishkar', mode: Mode.OFFLINE },
			{ time: '12:00PM', name: 'Bornphsycos', mode: Mode.OFFLINE },
			{ time: '12:00PM', name: 'Standard Hunt', mode: Mode.OFFLINE },
			{ time: '3:00PM', name: 'Lounge', mode: Mode.OFFLINE },
			{ time: '12:00PM', name: 'Virtual Placement Round 1', mode: Mode.OFFLINE },
			{ time: '2:30PM to 5:30PM', name: 'Virtual Placement Round 2', mode: Mode.OFFLINE },
			{ time: '5:00PM onwards', name: 'Respawn', mode: Mode.ONLINE },
			{ time: '5:00PM onwards', name: 'Respawn Chess', mode: Mode.ONLINE },
			{ time: '5:00PM onwards', name: 'Respawn Valorant', mode: Mode.ONLINE },
			{ time: '5:00PM onwards', name: 'Piso Soccer', mode: Mode.ONLINE }
		],
		// Day 2
		[
			{ time: '9:30AM', name: 'Hackathon', mode: Mode.OFFLINE },
			{ time: '11:00AM-5:00PM', name: 'Yuvodaya', mode: Mode.OFFLINE },
			{ time: '12:00AM-3:00PM', name: 'Codventure', mode: Mode.OFFLINE },
			{ time: '12:00AM-3:00PM', name: 'Brain Busters (BIS)', mode: Mode.OFFLINE },
			{ time: '1:00PM-5:00PM', name: 'Bridge-o-Craft', mode: Mode.ONLINE },
			{ time: '1:00PM-5:00PM', name: 'Career Builder & Concrete Expert (BIS)', mode: Mode.OFFLINE },
			{ time: '2:00PM', name: 'Food-O-hlics', mode: Mode.OFFLINE },
			{ time: '2:00PM', name: 'Standard Summit (BIS)', mode: Mode.OFFLINE },
			{ time: '1:00PM-4:00PM', name: 'Ad Mad (BIS)', mode: Mode.OFFLINE },
			{ time: '5:30PM', name: 'Stargaze', mode: Mode.OFFLINE }
		
		],
		// Day 3
		[
			{ time: '11:00AM', name: 'Graffiti', mode: Mode.OFFLINE },
			{ time: '12:00PM', name: 'Jigyasa', mode: Mode.OFFLINE },
			{ time: '4:00PM', name: 'Valedictory', mode: Mode.OFFLINE }
		]
	];
</script>
<style>
	video{
position: fixed;
width: 100%;
height: 100%;
scale: 1.5;
object-fit: cover;
z-index: -1;
filter: blur(4px);
}
</style>

<video src="/events/sample.mp4" autoplay loop muted></video>
<div >
	<div class="pt-28 mb-4">
		<h2 class="text-6xl font-bold text-center">Timeline</h2>
	</div>
	<div class="flex flex-col md:flex-row">
		{#each TIMELINE as Feb, i}
			<div class="w-full md:w-1/3 p-4">
				<div class="text-center font-bold text-2xl">Feb {i+20} (Day{i + 1})</div>
				<div class="flex flex-col">
					{#each Feb as item, i}
						<div class="w-full p-2 border border-gray-400">
							<div class="text-center font-bold nunu">{i + 1}</div>
							<div class="text-center nunu">{item.time}</div>
							<div class="text-center nunu">{item.name}</div>
							<div class="text-center nunu">{item.mode}</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
