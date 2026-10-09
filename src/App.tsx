
import { useState } from 'react'

const themes = [
  { id: 'nature', name: '🏔️ 자연과 풍경' },
  { id: 'history', name: '🏛️ 역사와 문화' },
  { id: 'food', name: '🍕 음식과 미식' },
  { id: 'city', name: '🌆 도시 탐방' },
]

function App() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null)

  return (
    <main style={{
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      color: '#1e293b',
      padding: '60px 24px',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>🌍 EuroTrip Planner</h1>
        <p>나만의 유럽 여행을 계획해 보세요.</p>

        <h2 style={{ marginTop: '48px' }}>
          어떤 여행을 좋아하시나요?
        </h2>
        <p>관심 있는 여행 테마를 선택해 주세요.</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          marginTop: '24px'
        }}>
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setSelectedTheme(theme.id)}
              style={{
                padding: '24px 12px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '17px',
                color: '#1e293b',
                backgroundColor: selectedTheme === theme.id
                  ? '#dbeafe'
                  : 'white',
                border: selectedTheme === theme.id
                  ? '2px solid #2563eb'
                  : '2px solid #e2e8f0'
              }}
            >
              {theme.name}
            </button>
          ))}
        </div>

        {selectedTheme && (
          <p style={{ marginTop: '32px', fontWeight: 'bold' }}>
            ✅ 여행 테마가 선택되었습니다!
          </p>
        )}
      </div>
    </main>
  )
}

export default App
