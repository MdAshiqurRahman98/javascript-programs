// Climb Stairs Solution using Dynamic Programming

function climbStairs(n) {
    if (n <= 2) {
        return n;
    }

    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

const n = 3;
console.log(climbStairs(n));