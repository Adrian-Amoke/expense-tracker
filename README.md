# Expense Tracker Application

A React-based expense tracking application with form input, search functionality, and tabular display.

## Features

- Add expenses with name, description, category, amount, and date
- View all expenses in a sortable table
- Search expenses by name, description, or category
- Responsive design for all screen sizes
- Form validation to ensure data quality

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Usage

1. **Adding Expenses**:
   - Fill in all required fields in the form
   - Click "Add Expense" to submit
   - New expenses will appear in the table

2. **Viewing Expenses**:
   - The table displays all expense records
   - Columns can be sorted by clicking headers

3. **Searching Expenses**:
   - Type in the search bar to filter results
   - Search matches against name, description, or category

## Components

- **ExpenseForm**: Form for adding new expenses
- **ExpenseTable**: Displays all expenses in tabular format
- **SearchBar**: Input field for filtering expenses

## Data Structure

Each expense record contains:
```javascript
{
  id: String, // Unique identifier
  name: String, // Expense name
  description: String, // Expense details
  category: String, // Expense category
  amount: Number, // Expense amount
  date: String // Date of expense (YYYY-MM-DD)
}
```

## Screenshots

<!-- Add application screenshots here -->

## License

MIT License - see [LICENSE](LICENSE) for details
