import React, { useState } from 'react';
import translate from 'google-translate-api';

function Dictionary() {
    const [searchWord, setSearchWord] = useState('');
    const [result, setResult] = useState('');
    const [savedWords, setSavedWords] = useState([]);

    const handleSearch = async () => {
        try {
            const res = await translate(searchWord, { from: 'en', to: 'vi' });
            setResult(res.text); // Kết quả dịch
        } catch (error) {
            console.error('Error translating:', error);
        }
    };

    const handleAddWord = () => {
        if (result) {
            setSavedWords([...savedWords, { word: searchWord, meaning: result }]);
            alert('Đã thêm từ vào danh sách!');
        }
    };

    return (
        <div>
            <h1>Tra từ điển Anh-Việt</h1>
            <input
                type="text"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
                placeholder="Nhập từ cần tra"
            />
            <button onClick={handleSearch}>Tra từ</button>

            {result && (
                <div>
                    <h2>Kết quả:</h2>
                    <p><b>Từ:</b> {searchWord}</p>
                    <p><b>Nghĩa:</b> {result}</p>
                    <button onClick={handleAddWord}>Thêm vào danh sách</button>
                </div>
            )}

            <div>
                <h2>Từ đã lưu:</h2>
                {savedWords.map((word, index) => (
                    <div key={index}>
                        <p><b>Từ:</b> {word.word}</p>
                        <p><b>Nghĩa:</b> {word.meaning}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dictionary;
