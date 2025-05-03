import React, { useEffect, useState } from 'react'

const ChipInput = () => {
    const [chips, setChips] = useState([]);
    const [chip, setChip] = useState("");
    const handleInputChange = (e) => {
        setChip(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (chip.trim() !== "") {
            const newId = chips.length + 1
            const newTitle = chip;
            const newChip = { id: newId, title: newTitle }
            setChips((prev) => {
                const updatedChips = [...prev, newChip]
                localStorage.setItem("chips", JSON.stringify(updatedChips));
                return updatedChips;
            });
        }
        setChip("");
    }

    const handleRemoveClick = (chipId) => {
        const updatedChips = chips.filter(chip => chip.id !== chipId);
        setChips(updatedChips);
        localStorage.setItem("chips", updatedChips);
    }

    useEffect(() => {
        const storedChips = localStorage.getItem("chips");
        if (storedChips) {
            setChips(JSON.parse(storedChips));
            console.log(JSON.parse(storedChips));
        }
    }, [])

    return (
        <div className='flex justify-center flex-col items-center py-5 px-10'>
            <div className='flex justify-center flex-col items-center my-5'>
                <h1 className='text-4xl font-bold mb-10'>Chips Input</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleInputChange}
                        type="text"
                        className='border-1 border-gray-700 py-1 px-2 rounded-xl'
                        placeholder='Enter the Input'
                        value={chip}
                    />
                </form>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <ul className='grid grid-cols-3'>
                    {
                        chips.length > 0
                            ? chips.map((chipItem) => (
                                <li className='flex justify-between items-center py-2 px-3 bg-gray-100 text-black m-2 rounded-full w-35' key={chipItem.id}>
                                    <p className='text-lg font-bold'>{chipItem.title}</p>
                                    <p
                                        onClick={() => handleRemoveClick(chipItem.id)}
                                        className='text-xl font-bold text-red-600 cursor-pointer'
                                    >x</p>
                                </li>
                            ))
                            : <p className='text-lg font-bold'>No Chips Found</p>
                    }
                </ul>
            </div>
        </div>
    )
}

export default ChipInput