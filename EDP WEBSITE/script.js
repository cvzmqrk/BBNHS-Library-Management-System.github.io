// Database Example
const libraryDatabase = {
    issuedBooks: [
        { id: '#TR2024001', title: 'Advanced Algebra', borrower: 'Juan Dela Cruz', memberId: 'S2024001', type: 'Student', issueDate: 'Feb 20, 2024', dueDate: 'Mar 15, 2024', daysLeft: 18, status: 'Active' },
        { id: '#TR2024002', title: 'World History: Modern Era', borrower: 'Juan Dela Cruz', memberId: 'S2024001', type: 'Student', issueDate: 'Feb 18, 2024', dueDate: 'Mar 20, 2024', daysLeft: 23, status: 'Active' },
        { id: '#TR2024003', title: 'English Grammar in Use', borrower: 'Maria Santos', memberId: 'S2024002', type: 'Student', issueDate: 'Jan 20, 2024', dueDate: 'Feb 20, 2024', daysLeft: -7, status: 'Overdue' },
        { id: '#TR2024004', title: 'Biology: The Living World', borrower: 'Prof. Robert Garcia', memberId: 'T2024001', type: 'Teacher', issueDate: 'Feb 15, 2024', dueDate: 'Apr 01, 2024', daysLeft: 35, status: 'Active' },
        { id: '#TR2024005', title: 'Kasaysayan ng Pilipinas', borrower: 'Prof. Robert Garcia', memberId: 'T2024001', type: 'Teacher', issueDate: 'Feb 12, 2024', dueDate: 'Mar 30, 2024', daysLeft: 33, status: 'Active' },
        { id: '#TR2024006', title: 'English Grammar in Use', borrower: 'Ms. Anna Lim', memberId: 'T2024002', type: 'Teacher', issueDate: 'Feb 25, 2024', dueDate: 'Mar 28, 2024', daysLeft: 31, status: 'Active' },
        { id: '#TR2024007', title: 'Biology: The Living World', borrower: 'Lisa Fernandez', memberId: 'S2024004', type: 'Student', issueDate: 'Jan 10, 2024', dueDate: 'Feb 10, 2024', daysLeft: -17, status: 'Overdue' },
        { id: '#TR2024008', title: 'World History: Modern Era', borrower: 'Lisa Fernandez', memberId: 'S2024004', type: 'Student', issueDate: 'Jan 15, 2024', dueDate: 'Feb 15, 2024', daysLeft: -12, status: 'Overdue' }
    ],
    returnedBooks: [
        { title: 'English Grammar in Use', borrower: 'Juan Dela Cruz', type: 'Student', dateBorrowed: 'Feb 10, 2024', dateReturned: 'Feb 25, 2024', daysBorrowed: 15, status: 'On Time' },
        { title: 'World History: Modern Era', borrower: 'Prof. Robert Garcia', type: 'Teacher', dateBorrowed: 'Feb 5, 2024', dateReturned: 'Feb 22, 2024', daysBorrowed: 17, status: 'On Time' },
        { title: 'Advanced Algebra', borrower: 'Maria Santos', type: 'Student', dateBorrowed: 'Jan 20, 2024', dateReturned: 'Feb 15, 2024', daysBorrowed: 26, status: 'Late Return' },
        { title: 'Kasaysayan ng Pilipinas', borrower: 'Pedro Reyes', type: 'Student', dateBorrowed: 'Feb 1, 2024', dateReturned: 'Feb 14, 2024', daysBorrowed: 13, status: 'On Time' },
        { title: 'Biology: The Living World', borrower: 'Ms. Anna Lim', type: 'Teacher', dateBorrowed: 'Jan 28, 2024', dateReturned: 'Feb 18, 2024', daysBorrowed: 21, status: 'On Time' }
    ],
    notReturnedBooks: [
        { title: 'English Grammar in Use', borrower: 'Maria Santos', memberId: 'S2024002', type: 'Student', dateBorrowed: 'Jan 20, 2024', dueDate: 'Feb 20, 2024', daysOverdue: 7, fine: 50 },
        { title: 'Biology: The Living World', borrower: 'Lisa Fernandez', memberId: 'S2024004', type: 'Student', dateBorrowed: 'Jan 10, 2024', dueDate: 'Feb 10, 2024', daysOverdue: 17, fine: 120 },
        { title: 'World History: Modern Era', borrower: 'Lisa Fernandez', memberId: 'S2024004', type: 'Student', dateBorrowed: 'Jan 15, 2024', dueDate: 'Feb 15, 2024', daysOverdue: 12, fine: 120 }
    ]
};

// Member data
const memberData = {
    'S2024001': {
        name: 'Juan Dela Cruz',
        type: 'Student',
        id: 'S2024001',
        grade: 'Grade 10 - Section A',
        email: 'juan.delacruz@bbnhs.edu.ph',
        phone: '09171234567',
        fines: 0,
        borrowedBooks: [
            { title: 'Advanced Algebra', dueDate: '2024-03-15', overdue: false },
            { title: 'World History: Modern Era', dueDate: '2024-03-20', overdue: false }
        ]
    },
    'S2024002': {
        name: 'Maria Santos',
        type: 'Student',
        id: 'S2024002',
        grade: 'Grade 11 - Section B',
        email: 'maria.santos@bbnhs.edu.ph',
        phone: '09187654321',
        fines: 50,
        borrowedBooks: [
            { title: 'English Grammar in Use', dueDate: '2024-02-20', overdue: true }
        ]
    },
    'T2024001': {
        name: 'Prof. Robert Garcia',
        type: 'Teacher',
        id: 'T2024001',
        department: 'Mathematics Department',
        email: 'robert.garcia@bbnhs.edu.ph',
        phone: '09191234567',
        fines: 0,
        borrowedBooks: [
            { title: 'Advanced Algebra', dueDate: '2024-04-01', overdue: false },
            { title: 'Biology: The Living World', dueDate: '2024-03-25', overdue: false },
            { title: 'Kasaysayan ng Pilipinas', dueDate: '2024-03-30', overdue: false }
        ]
    },
    'S2024003': {
        name: 'Pedro Reyes',
        type: 'Student',
        id: 'S2024003',
        grade: 'Grade 9 - Section C',
        email: 'pedro.reyes@bbnhs.edu.ph',
        phone: '09161234567',
        fines: 0,
        borrowedBooks: []
    },
    'T2024002': {
        name: 'Ms. Anna Lim',
        type: 'Teacher',
        id: 'T2024002',
        department: 'English Department',
        email: 'anna.lim@bbnhs.edu.ph',
        phone: '09201234567',
        fines: 0,
        borrowedBooks: [
            { title: 'English Grammar in Use', dueDate: '2024-03-28', overdue: false }
        ]
    },
    'S2024004': {
        name: 'Lisa Fernandez',
        type: 'Student',
        id: 'S2024004',
        grade: 'Grade 12 - Section A',
        email: 'lisa.fernandez@bbnhs.edu.ph',
        phone: '09151234567',
        fines: 120,
        borrowedBooks: [
            { title: 'Biology: The Living World', dueDate: '2024-02-10', overdue: true },
            { title: 'World History: Modern Era', dueDate: '2024-02-15', overdue: true }
        ]
    }
};

// Update dashboard counts
function updateDashboardCounts() {
    const issuedCountEl = document.getElementById('issuedCount');
    const returnedCountEl = document.getElementById('returnedCount');
    const notReturnedCountEl = document.getElementById('notReturnedCount');
    
    if (issuedCountEl) issuedCountEl.textContent = libraryDatabase.issuedBooks.length;
    if (returnedCountEl) returnedCountEl.textContent = libraryDatabase.returnedBooks.length;
    if (notReturnedCountEl) notReturnedCountEl.textContent = libraryDatabase.notReturnedBooks.length;
}

// Update real-time date
function updateCurrentDate() {
    const dateEl = document.getElementById('currentDate');
    if (dateEl) {
        const now = new Date();
        const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', options);
        dateEl.textContent = formattedDate;
    }
}

// Update last login
function updateLastLogin() {
    const lastLoginEl = document.getElementById('lastLogin');
    if (lastLoginEl) {
        const now = new Date();
        const options = { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        lastLoginEl.textContent = now.toLocaleDateString('en-US', options);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateDashboardCounts();
    updateCurrentDate();
    
    // Update date every second for real-time display
    setInterval(updateCurrentDate, 1000);
    
    // Setup search inputs
    setupSearchInputs();
    
    // Setup mobile menu
    setupMobileMenu();
});

// Mobile menu toggle
function setupMobileMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuIcon && sidebar) {
        menuIcon.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
        
        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 968) {
                if (!sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            }
        });
        
        // Close sidebar when clicking a nav item on mobile
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 968) {
                    sidebar.classList.remove('active');
                }
            });
        });
    }
}

// Setup search inputs for all pages
function setupSearchInputs() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('.books-table tbody tr');
            
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }

    const searchMemberInput = document.getElementById('searchMemberInput');
    if (searchMemberInput) {
        searchMemberInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('.books-table tbody tr');
            
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }

    const searchIssuedInput = document.getElementById('searchIssuedInput');
    if (searchIssuedInput) {
        searchIssuedInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('.books-table tbody tr');
            
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }

    const searchReturnedInput = document.getElementById('searchReturnedInput');
    if (searchReturnedInput) {
        searchReturnedInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('.books-table tbody tr');
            
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }

    const searchNotReturnedInput = document.getElementById('searchNotReturnedInput');
    if (searchNotReturnedInput) {
        searchNotReturnedInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('.books-table tbody tr');
            
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }
}

// Filter books by category
function filterBooks(category) {
    const rows = document.querySelectorAll('.books-table tbody tr');
    rows.forEach(row => {
        const categoryCell = row.querySelector('.badge');
        if (categoryCell && categoryCell.textContent.toLowerCase().includes(category.toLowerCase())) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Filter members by type
function filterMembers(type) {
    const rows = document.querySelectorAll('.books-table tbody tr');
    rows.forEach(row => {
        const typeCell = row.querySelector('.badge');
        if (typeCell && typeCell.textContent.toLowerCase().includes(type.toLowerCase())) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// View member profile
function viewMemberProfile(memberId, type) {
    const member = memberData[memberId];
    const modal = document.getElementById('memberModal');
    const modalBody = document.getElementById('modalBody');

    let profileHTML = `
        <div class="profile-section">
            <h3>Personal Information</h3>
            <div class="profile-info">
                <div class="info-item">
                    <div class="info-label">Full Name</div>
                    <div class="info-value">${member.name}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Member ID</div>
                    <div class="info-value">${member.id}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">${member.type === 'Student' ? 'Grade & Section' : 'Department'}</div>
                    <div class="info-value">${member.type === 'Student' ? member.grade : member.department}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Member Type</div>
                    <div class="info-value">${member.type}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Email</div>
                    <div class="info-value">${member.email}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Phone</div>
                    <div class="info-value">${member.phone}</div>
                </div>
            </div>
        </div>

        <div class="profile-section">
            <h3>Borrowed Books (${member.borrowedBooks.length})</h3>
            ${member.borrowedBooks.length > 0 ? `
                <ul class="borrowed-books-list">
                    ${member.borrowedBooks.map(book => `
                        <li>
                            <div>
                                <div class="book-title-borrowed">${book.title}</div>
                                <div class="due-date ${book.overdue ? 'overdue-text' : ''}">
                                    Due: ${book.dueDate} ${book.overdue ? '(OVERDUE)' : ''}
                                </div>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            ` : '<p style="color: #7f8c8d;">No books currently borrowed</p>'}
        </div>

        <div class="profile-section">
            <h3>Fines & Penalties</h3>
            <div style="padding: 20px; background: ${member.fines > 0 ? '#ffe6e6' : '#d5f4e6'}; border-radius: 8px; text-align: center;">
                ${member.fines > 0 ? 
                    `<p class="has-fines">₱${member.fines}.00</p>
                     <p style="color: #7f8c8d; margin-top: 10px;">Outstanding fines must be paid</p>` :
                    `<p class="no-fines">No Fines</p>
                     <p style="color: #7f8c8d; margin-top: 10px;">Member account is in good standing</p>`
                }
            </div>
        </div>
    `;

    modalBody.innerHTML = profileHTML;
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('memberModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('memberModal');
    if (modal && event.target == modal) {
        modal.style.display = 'none';
    }
}

// Process return
function processReturn(transactionId) {
    if (confirm(`Process return for ${transactionId}?\n\nThis will:\n- Mark the item as returned\n- Calculate any fines if overdue\n- Update member's borrowing history\n- Make the item available for others`)) {
        alert(`✅ Item ${transactionId} has been successfully returned!\n\nThe item is now available in the catalog.`);
    }
}

// Renew item
function renewItem(transactionId) {
    if (confirm(`Renew item ${transactionId}?\n\nThis will extend the due date by 14 days.`)) {
        alert(`✅ Item ${transactionId} has been renewed!\n\nNew due date has been set.`);
    }
}

// Contact member
function contactMember(memberId) {
    const member = memberData[memberId];
    alert(`Contacting ${member.name}\n\nEmail: ${member.email}\nPhone: ${member.phone}\n\nPlease remind them to return their overdue books and pay the outstanding fines.`);
}

// Settings functions
function saveProfile() {
    const name = document.getElementById('profileName').value;
    const email = document.getElementById('profileEmail').value;
    const phone = document.getElementById('profilePhone').value;
    
    if (confirm('Save profile changes?\n\nName: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone)) {
        alert('✅ Profile updated successfully!');
    }
}

function cancelProfileEdit() {
    if (confirm('Discard changes and reset to original values?')) {
        document.getElementById('profileName').value = 'Mark Lester Cano';
        document.getElementById('profileEmail').value = 'MarkLester.Cano@bbnhs.edu.ph';
        document.getElementById('profilePhone').value = '+254708344101';
        alert('Changes cancelled.');
    }
}

function changePassword() {
    const newPassword = prompt('Enter your new password:');
    if (newPassword) {
        const confirmPassword = prompt('Confirm your new password:');
        if (newPassword === confirmPassword) {
            alert('✅ Password changed successfully!');
        } else {
            alert('❌ Passwords do not match. Please try again.');
        }
    }
}

function clearCache() {
    if (confirm('Are you sure you want to clear all cache and temporary data?\n\nThis action cannot be undone.')) {
        alert('✅ Cache cleared successfully!');
    }
}

function logout() {
    if (confirm('Are you sure you want to log out?\n\nYou will need to sign in again to access the system.')) {
        alert('👋 Logging out...\n\nThank you for using BBNHS Library Management System!');
        // In a real application, this would redirect to login page
        // window.location.href = 'login.html';
    }
}