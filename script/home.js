const url = ("https://phi-lab-server.vercel.app/api/v1/lab/issues");

fetch(url)
  .then(res => res.json())
  .then(data => displayCard(data.data))


const displayCard = (cards) => {
  const cardContainer = document.getElementById("card-container");

  cards.forEach(card => {
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
      <div class="space-y-3">
        <div class="flex justify-between">
          <img src="../assets/Open-Status.png" alt="" >
          <h4 class="bg-[#EF444430] rounded-full px-7 py-1 font-semibold text-red-500">High</h4>
        </div>
        <h2 class="text-2xl font-bold">Fix navigation menu on mobile devices</h2>
        <p>The navigation menu doesn't collapse properly on mobile devices...</p>
        <div>
          <div class="btn btn-soft btn-error"><span><i class="fa-solid fa-bug"></i></span>BUG</div>
          <div class="btn btn-soft btn-error"><span><i class="fa-solid fa-circle-xmark"></i></span>HELP WANTED</div>
        </div>
        <div class="h-1 bg-gray-200 w-full"></div>
        <div>
          <p>#1by john_doe</p>
          <p>1/15/2024</p>
        </div>
      </div>
    `;

    cardContainer.appendChild(createDiv)

  });
}

