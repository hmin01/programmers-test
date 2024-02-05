function solution(num_list) {
  return num_list.reduce((res, cur) => {
    res.unshift(cur);
    return res;
  }, []);

  // OR
  // return num_list.reverse();
}
