const url = ("https://phi-lab-server.vercel.app/api/v1/lab/issues");

fetch(url)
  .then(res => res.json())
  .then(data => displayCard(data.data))




const displayCard = (cards) => {

  

  const cardContainer = document.getElementById("card-container");

  cards.forEach(card => {
    const createDiv = document.createElement("div");
    const apiTime = card.createdAt;
    const dateTime = new Date(apiTime).toLocaleDateString();
    
    createDiv.innerHTML = `
      <div class=" shadow-sm  border border-gray-300 rounded-md h-full ">
        <div class=" space-y-4 p-4">
          <div class="flex justify-between ">
            <div>
              <img class="w-8" src="../assets/${card.status == "open" ? card.status : card.status}-Status.png" alt="" >
            </div>
            <h4 class="bg-[#EF444430] rounded-full px-7 py-1 font-semibold text-red-500">${card.priority}</h4>
          </div>
          <h2 class="text-lg font-semibold">${card.title}</h2>
          <p class="text-sm">${card.description}</p>
          <div class="gap-2 flex flex-wrap">
            <div class=" py-1 px-2 font-semibold rounded-full bg-[#EF444430] text-red-500 border border-red-300"><span><i class="fa-solid fa-bug"></i></span>${card.labels[0]}</div>
            <div class="py-1 px-2 font-semibold rounded-full bg-orange-100 text-orange-400 border border-orange-300"><span><i class="fa-solid fa-circle-xmark"></i></span>${card.labels[1]  ? card.labels[1] : ""}</div>
          </div>
        </div>
        <div class="h-px border border-gray-300 "></div>
        <div class="p-4 text-[#64748B] text-sm font-semibold">
          <p>#${card.id} by ${card.author}</p>
          <p>${dateTime}</p>
        </div>
      </div>
    `;

    cardContainer.appendChild(createDiv)

  });
}

