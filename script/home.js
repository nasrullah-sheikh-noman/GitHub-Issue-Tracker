const url = ("https://phi-lab-server.vercel.app/api/v1/lab/issues");

fetch(url)
  .then(res => res.json())
  .then(data => displayCard(data.data))


const displayCard = (cards) => {
  const cardContainer = document.getElementById("card-container");

  cards.forEach(card => {
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
      <div class=" shadow-sm  border border-gray-300 rounded-md">
        <div class=" space-y-4 p-4">
          <div class="flex justify-between ">
            <img class="w-8" src="../assets/Open-Status.png" alt="" >
            <h4 class="bg-[#EF444430] rounded-full px-7 py-1 font-semibold text-red-500">High</h4>
          </div>
          <h2 class="text-lg font-semibold">Fix navigation menu on mobile devices</h2>
          <p class="text-sm">The navigation menu doesn't collapse properly on mobile devices...</p>
          <div class="gap-2 flex">
            <div class=" py-1 px-2 font-semibold rounded-full bg-[#EF444430] text-red-500 border border-red-300"><span><i class="fa-solid fa-bug"></i></span>BUG</div>
            <div class="py-1 px-2 font-semibold rounded-full bg-orange-100 text-orange-400 border border-orange-300"><span><i class="fa-solid fa-circle-xmark"></i></span>HELP WANTED</div>
          </div>
        </div>
        <div class="h-px border border-gray-300 "></div>
        <div class="p-4 text-[#64748B]">
          <p c>#1by john_doe</p>
          <p>1/15/2024</p>
        </div>
      </div>
    `;

    cardContainer.appendChild(createDiv)

  });
}

