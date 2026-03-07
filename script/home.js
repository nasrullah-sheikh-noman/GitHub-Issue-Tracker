const url = ("https://phi-lab-server.vercel.app/api/v1/lab/issues");

fetch(url)
  .then(res => res.json())
  .then(data => displayCard(data.data))




const displayCard = (cards) => {



  const cardContainer = document.getElementById("card-container");

  cards.forEach(card => {

    const createDiv = document.createElement("div");

    const apiCreateTime = card.createdAt;
    const dateCreateTime = new Date(apiCreateTime).toLocaleDateString();

    const apiUpdateTime = card.updatedAt;
    const dateUpdateTime = new Date(apiUpdateTime).toLocaleDateString();

    createDiv.innerHTML = `
      <div class=" shadow-sm flex-1 border border-gray-300 rounded-xl h-full hover:scale-105 duration-300  border-t-${card.status === "open" ? "green" : "blue"}-600 border-t-6 pt-5">
        <div class=" space-y-4 p-4">
          <div class="flex justify-between ">
            <div>
              <img class="w-8" src="../assets/${card.status == "open" ? card.status : card.status}-Status.png" alt="" >
            </div>
            <h4 class="bg-[#EF4444${card.priority == "high" ? 70 : card.priority == "medium" ? 40 : 25}] rounded-full px-7 py-1 font-semibold text-red-500">${card.priority}</h4>
          </div>
          <h2 class="text-lg font-semibold">${card.title}</h2>
          <p class="text-sm">${card.description}</p>
          <div class="gap-2 flex flex-wrap">
            <div class=" py-1 px-2 font-semibold rounded-full bg-[#dd5aabab] text-[#8f055aaf] border border-red-300"><span><i class="${card.labels[0] == "bug" ? `fa-solid fa-bug` : card.labels[0] == "enhancement" ? `fa-solid fa-maximize` : card.labels[0] == "documentation" ? `fa-solid fa-book-medical` : ""}"></i></span>${card.labels[0]}</div>
            <div class="py-1 px-2 font-semibold rounded-full bg-orange-${card.labels[1] ? 100 : 0} text-orange-400 ${card.labels[1] ? "border" : ""} border-orange-300"><span><i class="${card.labels[1] == "help wanted" ? `fa-solid fa-circle-xmark` : card.labels[1] == "good first issue" ? `fa-solid fa-cannabis` : card.labels[1] == "enhancement" ? "fa-solid fa-maximize" : ""}"></i></span>${card.labels[1] ? card.labels[1] : ""}</div>
          </div>
        </div>
        <div class="h-px border border-gray-300 "></div>
        <div class="p-4 text-[#64748B] text-sm font-semibold space-y-1">
          <p>Details of id: ${card.id}  </p>
          <p>Author : ${card.author}</p>
          <p>Assignee : ${card.assignee ? card.assignee : "Not assigned anyone"}</p>
          <p>Created time : ${dateCreateTime}</p>
          <p>Updated time : ${dateUpdateTime ? dateUpdateTime : "Don't update this id"}</p>
        </div>
      </div>
    `;

    cardContainer.appendChild(createDiv)

  });
}

