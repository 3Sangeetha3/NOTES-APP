export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export const getInitials = (name) => {
    if(!name) return "";

    const words = name.split(' ');
    let initials = "";

    words.forEach(word => {
        initials += word[0];
    });

    return initials.toUpperCase();
}