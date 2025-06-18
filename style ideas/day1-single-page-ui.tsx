import React, { useState } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Day1SinglePageDemo() {
  const [vision, setVision] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fake AI response for demo
  const fakeAIResponse = `Your vision for a journaling website to overcome fear of failure is genuinely powerful - this could be a transformative tool for many people struggling with perfectionism and self-doubt. You're addressing a universal human challenge that prevents countless individuals from pursuing their dreams and reaching their potential.`;

  const handleGetInsight = () => {
    setIsLoading(true);
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
      setShowResponse(true);
      // Smooth scroll to AI response
      setTimeout(() => {
        document.getElementById('ai-response')?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100);
    }, 2000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #FFF5F3 0%, #FFE8E5 100%)',
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <div style={{
        width: '100%',
        maxWidth: '800px',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
      }}>
        {/* Progress Bar */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem'
          }}>
            <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Power-Up</span>
            <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Main Exercise</span>
            <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Reflection</span>
          </div>
          <div style={{
            position: 'relative',
            height: '0.5rem',
            backgroundColor: '#f3f4f6',
            borderRadius: '9999px',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              height: '100%',
              width: '50%',
              backgroundColor: '#E07B67',
              transition: 'width 0.3s ease',
              borderRadius: '9999px'
            }}></div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '42px',
              fontWeight: '400',
              color: '#1a1a1a',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>Project Vision</h1>
            <p style={{
              fontSize: '17px',
              color: '#4b5563',
              textAlign: 'center',
              lineHeight: '1.8',
              marginBottom: '50px'
            }}>
              Let's start building your fear map by understanding your project vision.
            </p>
          </div>

          <div>
            <label htmlFor="projectVision" style={{
              fontSize: '15px',
              color: '#6b7280',
              marginBottom: '12px',
              display: 'block',
              fontWeight: '400'
            }}>
              First, write your project idea in its simplest form:
            </label>
            <textarea
              id="projectVision"
              placeholder="Example: Create a sustainable clothing brand"
              rows={4}
              value={vision}
              onChange={(e) => setVision(e.target.value)}
              disabled={showResponse}
              style={{
                width: '100%',
                padding: '20px',
                border: '2px solid rgba(255, 181, 167, 0.3)',
                borderRadius: '12px',
                fontSize: '16px',
                color: '#1a1a1a',
                background: showResponse ? 'rgba(249, 250, 251, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                resize: 'vertical',
                minHeight: '120px',
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: '1.6',
                transition: 'all 0.3s ease',
                marginBottom: '24px',
                cursor: showResponse ? 'not-allowed' : 'text',
                outline: 'none'
              }}
            />
          </div>

          {/* Show "Get Insight" button only if no response yet */}
          {!showResponse && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0px',
              margin: '0'
            }}>
              <button
                type="button"
                onClick={handleGetInsight}
                disabled={!vision.trim() || isLoading}
                style={{
                  background: (!vision.trim() || isLoading) 
                    ? 'rgba(224, 123, 103, 0.08)' 
                    : 'linear-gradient(135deg, #E07B67 0%, #FFB5A7 100%)',
                  color: (!vision.trim() || isLoading) ? 'rgba(224, 123, 103, 0.5)' : 'white',
                  border: 'none',
                  padding: '18px 32px',
                  borderRadius: '12px',
                  fontWeight: '500',
                  fontSize: '17px',
                  transition: 'all 0.3s ease',
                  boxShadow: (!vision.trim() || isLoading) ? 'none' : '0 8px 24px rgba(224, 123, 103, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  cursor: (!vision.trim() || isLoading) ? 'not-allowed' : 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  transform: (!vision.trim() || isLoading) ? 'none' : 'translateY(0)',
                }}
                onMouseEnter={(e) => {
                  if (vision.trim() && !isLoading) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 32px rgba(224, 123, 103, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (vision.trim() && !isLoading) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 24px rgba(224, 123, 103, 0.3)';
                  }
                }}
              >
                Get Coco's Insight <ArrowRight size={20} />
              </button>
            </div>
          )}

          {/* AI Response Section - appears below the form */}
          {(isLoading || showResponse) && (
            <div id="ai-response" style={{ marginTop: '40px' }}>
              {/* Loading state */}
              {isLoading && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '16px',
                  color: '#9CA3AF',
                  margin: '24px 0',
                  padding: '16px 24px',
                  background: 'linear-gradient(90deg, #FFF5F3 0%, #FFE5E5 20%, #FFF5F3 40%, #FFF5F3 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s infinite',
                  borderRadius: '12px'
                }}>
                  <style>{`
                    @keyframes shimmer {
                      0% { background-position: -200% 0; }
                      100% { background-position: 200% 0; }
                    }
                    @keyframes bounce {
                      0%, 80%, 100% {
                        transform: scale(0);
                        opacity: 0.5;
                      }
                      40% {
                        transform: scale(1);
                        opacity: 1;
                      }
                    }
                  `}</style>
                  <span>Coco is reflecting on your response</span>
                  <div style={{ display: 'inline-flex', gap: '4px' }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      background: '#E07B67',
                      borderRadius: '50%',
                      animation: 'bounce 1.4s infinite ease-in-out both',
                      animationDelay: '-0.32s'
                    }}></div>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      background: '#E07B67',
                      borderRadius: '50%',
                      animation: 'bounce 1.4s infinite ease-in-out both',
                      animationDelay: '-0.16s'
                    }}></div>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      background: '#E07B67',
                      borderRadius: '50%',
                      animation: 'bounce 1.4s infinite ease-in-out both'
                    }}></div>
                  </div>
                </div>
              )}

              {/* AI Response */}
              {showResponse && !isLoading && (
                <>
                  <div style={{
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    margin: '2rem 0'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: '#FFF5F3',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <MessageSquare style={{ color: '#E07B67', width: '24px', height: '24px' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h2 style={{
                          fontSize: '1.25rem',
                          fontWeight: '500',
                          color: '#1F2937',
                          margin: '0'
                        }}>From Coco, your guide</h2>
                        <p style={{
                          fontSize: '0.875rem',
                          color: '#6B7280',
                          margin: '0'
                        }}>AI support companion</p>
                      </div>
                    </div>
                    <div style={{
                      color: '#1F2937',
                      fontSize: '1rem',
                      lineHeight: '1.6'
                    }}>
                      <p>{fakeAIResponse}</p>
                    </div>
                  </div>

                  {/* Continue button appears after AI response */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0px',
                    margin: '0'
                  }}>
                    <button
                      onClick={() => console.log('Continue to next question')}
                      style={{
                        background: 'linear-gradient(135deg, #E07B67 0%, #FFB5A7 100%)',
                        color: 'white',
                        border: 'none',
                        padding: '18px 32px',
                        borderRadius: '12px',
                        fontWeight: '500',
                        fontSize: '17px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 24px rgba(224, 123, 103, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        cursor: 'pointer',
                        fontFamily: "'DM Sans', sans-serif"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 12px 32px rgba(224, 123, 103, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 8px 24px rgba(224, 123, 103, 0.3)';
                      }}
                    >
                      Continue to Next Question <ArrowRight size={20} />
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1.5rem',
          borderTop: '1px solid #f3f4f6',
          marginTop: '1.5rem'
        }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#6b7280',
            fontSize: '1rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif"
          }}>
            ← Back
          </button>
          <span style={{
            color: '#6b7280',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>Need Support?</span>
        </div>
      </div>
    </div>
  );
}