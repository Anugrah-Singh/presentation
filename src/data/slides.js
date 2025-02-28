// data/slides.js
export const slides = [
    {
      title: "Matrix Multiplication",
      subtitle: "A Journey Into Computational Despair",
      content: [
        { type: 'text', value: "Welcome to 'How to Multiply Matrices and Question Your Life Choices'" },
        { type: 'divider' },
        { type: 'text', value: "Three approaches we'll explore today:" },
        { type: 'list', items: [
          "Loops (The Classic Torture)",
          "Recursion (The Elegant Torture)",
          "Strassen's Algorithm (The Sophisticated Torture)"
        ]}
      ]
    },
    {
      title: "Approach 1: Using Loops",
      subtitle: "AKA 'The Brute Force Method'",
      content: [
        { 
          type: 'code', 
          language: 'python',
          code: `def matrix_multiply_loops(A, B):
      n = len(A)
      C = [[0 for _ in range(n)] for _ in range(n)]
      
      for i in range(n):
          for j in range(n):
              for k in range(n):
                  C[i][j] += A[i][k] * B[k][j]
                  
      return C`
        },
        { type: 'quote', value: "Three nested loops - like three circles of programming hell" }
      ]
    },
    {
      title: "Loops: Complexity Analysis",
      content: [
        { type: 'text', value: "Time Complexity: O(n³)" },
        { type: 'text', value: "- Just like your existential crisis, it grows cubically with age" },
        { type: 'divider' },
        { type: 'text', value: "Space Complexity: O(n²)" },
        { type: 'text', value: "- Enough memory to store your regrets about choosing computer science" },
        { type: 'divider' },
        { type: 'text', value: "Perfect for: Small matrices and people who hate efficiency" }
      ]
    },
    {
      title: "Approach 2: Using Recursion",
      subtitle: "Because One Problem Should Spawn Many Little Problems",
      content: [
        { 
          type: 'code', 
          language: 'python',
          code: `def matrix_multiply_recursive(A, B):
      # Base case
      if n == 1:
          return [[A[0][0] * B[0][0]]]
      
      # Divide matrices into quadrants
      # ... (dividing code not shown)
      
      # Recursive calls - your call stack weeps silently
      C11 = matrix_add(matrix_multiply_recursive(A11, B11), 
                      matrix_multiply_recursive(A12, B21))
      # ... more recursive calls
      
      # Combine results
      # ... (combining code not shown)`
        },
        { type: 'quote', value: "I heard you like matrix multiplications, so I put matrix multiplications in your matrix multiplications" }
      ]
    },
    {
      title: "Recursion: Complexity Analysis",
      content: [
        { type: 'text', value: "Time Complexity: Still O(n³)" },
        { type: 'text', value: "- All that recursion just to end up in the same place...like therapy" },
        { type: 'divider' },
        { type: 'text', value: "Space Complexity: O(n² log n)" },
        { type: 'text', value: "- Your RAM usage grows faster than excuses for missing deadlines" },
        { type: 'divider' },
        { type: 'text', value: "Perfect for: People who think indentation makes code better" }
      ]
    },
    {
      title: "Approach 3: Strassen's Algorithm",
      subtitle: "Volker Strassen's Gift to Desperate PhD Students",
      content: [
        { type: 'text', value: "Reduces 8 multiplications to 7 with clever linear combinations" },
        { 
          type: 'code', 
          language: 'python',
          code: `# Calculate these products
  P1 = (A11+A22) * (B11+B22)
  P2 = (A21+A22) * B11
  P3 = A11 * (B12-B22)
  P4 = A22 * (B21-B11)
  P5 = (A11+A12) * B22
  P6 = (A21-A11) * (B11+B12)
  P7 = (A12-A22) * (B21+B22)
  
  # Results
  C11 = P1 + P4 - P5 + P7
  C12 = P3 + P5
  C21 = P2 + P4
  C22 = P1 + P3 - P2 + P6`
        },
        { type: 'quote', value: "Like a magic trick that takes longer to set up than to perform" }
      ]
    },
    {
      title: "Strassen: Complexity Analysis",
      content: [
        { type: 'text', value: "Time Complexity: O(n^log₂7) ≈ O(n^2.81)" },
        { type: 'text', value: "- That tiny 0.19 improvement cost Strassen years of his life" },
        { type: 'divider' },
        { type: 'text', value: "Space Complexity: O(n² log n)" },
        { type: 'text', value: "- Almost as bloated as enterprise software" },
        { type: 'divider' },
        { type: 'text', value: "Perfect for: Theoretical computer scientists who never run their own code" }
      ]
    },
    {
      title: "Performance Comparison",
      subtitle: "Choose Your Poison",
      content: [
        { 
          type: 'table', 
          headers: ['Method', 'Time Complexity', 'When It\'s Actually Useful'],
          rows: [
            ['Loops', 'O(n³)', 'n < 100, or when you enjoy simplicity'],
            ['Recursion', 'O(n³)', 'Never. It\'s just loops with extra steps'],
            ['Strassen', 'O(n^2.81)', 'n > 1000, or when you need to impress someone']
          ]
        },
        { type: 'quote', value: "Academia vs. Industry: The eternal struggle between theoretical beauty and 'just ship it'" }
      ]
    },
    {
      title: "Practical Considerations",
      subtitle: "What They Don't Tell You in Algorithms Class",
      content: [
        { type: 'list', items: [
          "Strassen's algorithm has terrible constant factors\n  - Like that friend who's \"technically right\" but makes everything worse",
          "Cache optimization often beats algorithmic improvements\n  - Memory access patterns: the dark magic no one understands",
          "Modern libraries use hybrid approaches\n  - \"Let's just try everything and see what works\" - every ML engineer ever"
        ]}
      ]
    },
    {
      title: "Conclusion",
      subtitle: "Lessons in Matrix Multiplication",
      content: [
        { type: 'list', items: [
          "O(n³) isn't that bad if n is small enough\n   - And nothing in real life is as large as your problem sets",
          "Theoretical improvements don't always translate to real-world gains\n   - Much like your computer science degree",
          "Strassen's algorithm is like fine wine:\n   - Appreciated by connoisseurs\n   - Impractical for everyday use\n   - Makes your head hurt if you have too much"
        ]}
      ]
    },
    {
      title: "Any Questions?",
      content: [
        { type: 'quote', value: "Before you ask, yes, there are even faster matrix multiplication algorithms, but they're about as practical as building a nuclear reactor to charge your phone." }
      ]
    }
  ];